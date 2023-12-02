"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PersonaController {
    //* DI
    constructor() {
        this.getPersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const personas = yield postgres_1.prisma.persona.findMany();
            return res.json(personas);
        });
        this.getPersonaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const personas = yield postgres_1.prisma.persona.findFirst({
                where: { id }
            });
            (personas)
                ? res.json()
                : res.status(404).json({ error: `personas with id ${id} not found` });
        });
        this.createPersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPersonaDto] = dtos_1.CreatePersonaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const personas = yield postgres_1.prisma.persona.create({
                data: createPersonaDto
            });
            res.json(personas);
        });
        this.updatepersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatePersonaDto] = dtos_1.UpdatePersonaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const personas = yield postgres_1.prisma.persona.findFirst({
                where: { id }
            });
            if (!personas)
                return res.status(404).json({ error: `persona with id ${id} not found` });
            const updatepersona = yield postgres_1.prisma.persona.update({
                where: { id },
                data: updatePersonaDto.values
            });
            res.json(updatepersona);
        });
        this.deletepersona = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const personas = yield postgres_1.prisma.persona.findFirst({
                where: { id }
            });
            if (!personas)
                return res.status(404).json({ error: `personas with id${id} not found` });
            const deleted = yield postgres_1.prisma.persona.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `persona with id ${id} not found` });
        });
    }
}
exports.PersonaController = PersonaController;

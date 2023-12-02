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
exports.AsistenteController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class AsistenteController {
    constructor() {
        this.getAsistente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const asistentes = yield postgres_1.prisma.asistente.findMany();
            return res.json(asistentes);
        });
        this.getAsistenteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const asistente = yield postgres_1.prisma.asistente.findFirst({
                where: { id }
            });
            (asistente)
                ? res.json()
                : res.status(404).json({ error: `Asistente with id ${id} not found` });
        });
        this.createAsistente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createAsistenteDto] = dtos_1.CreateAsistenteDTO.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const asistente = yield postgres_1.prisma.asistente.create({
                data: createAsistenteDto
            });
            res.json(asistente);
        });
        this.updateAsistente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateAsistenteDto] = dtos_1.UpdateAsistenteDTO.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const asistente = yield postgres_1.prisma.asistente.findFirst({
                where: { id }
            });
            if (!asistente)
                return res.status(404).json({ error: `Asistente with id ${id} not found` });
            const updatedAsistente = yield postgres_1.prisma.asistente.update({
                where: { id },
                data: updateAsistenteDto.values
            });
            res.json(updatedAsistente);
        });
        this.deleteAsistente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const asistente = yield postgres_1.prisma.asistente.findFirst({
                where: { id }
            });
            if (!asistente)
                return res.status(404).json({ error: `Asistente with id ${id} not found` });
            const deleted = yield postgres_1.prisma.asistente.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Asistente with id ${id} not found` });
        });
    }
}
exports.AsistenteController = AsistenteController;

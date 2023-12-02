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
exports.EventoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class EventoController {
    //* DI
    constructor() {
        this.getEvento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const eventos = yield postgres_1.prisma.evento.findMany();
            return res.json(eventos);
        });
        this.getEventoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const evento = yield postgres_1.prisma.evento.findFirst({
                where: { id }
            });
            (evento)
                ? res.json()
                : res.status(404).json({ error: `evento with id ${id} not found` });
        });
        this.createEvento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createEventoDto] = dtos_1.CreateEventoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const eventos = yield postgres_1.prisma.evento.create({
                data: createEventoDto
            });
            res.json(eventos);
        });
        this.updateevento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateEventoDto] = dtos_1.UpdateEventoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const eventos = yield postgres_1.prisma.evento.findFirst({
                where: { id }
            });
            if (!eventos)
                return res.status(404).json({ error: `evento with id ${id} not found` });
            const updateevento = yield postgres_1.prisma.evento.update({
                where: { id },
                data: updateEventoDto.values
            });
            res.json(updateevento);
        });
        this.deleteevento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const eventos = yield postgres_1.prisma.evento.findFirst({
                where: { id }
            });
            if (!eventos)
                return res.status(404).json({ error: `evento with id${id} not found` });
            const deleted = yield postgres_1.prisma.evento.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `evento with id ${id} not found` });
        });
    }
}
exports.EventoController = EventoController;

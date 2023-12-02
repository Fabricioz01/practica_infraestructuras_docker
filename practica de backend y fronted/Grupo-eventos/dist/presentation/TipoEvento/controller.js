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
exports.TipoeventoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class TipoeventoController {
    //* DI
    constructor() {
        this.getTipoEvento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tipoeventos = yield postgres_1.prisma.tipoEvento.findMany();
            return res.json(tipoeventos);
        });
        this.getTipoEventoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const tipoeventos = yield postgres_1.prisma.tipoEvento.findFirst({
                where: { id }
            });
            (tipoeventos)
                ? res.json()
                : res.status(404).json({ error: `tipoevento with id ${id} not found` });
        });
        this.createTipoEvento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createTipoEventoDto] = dtos_1.CreateTipoEventoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const tipoeventos = yield postgres_1.prisma.tipoEvento.create({
                data: createTipoEventoDto
            });
            res.json(tipoeventos);
        });
        this.updatetipoevento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateTipoeventoDto] = dtos_1.UpdateTipoEventoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const tipoeventos = yield postgres_1.prisma.tipoEvento.findFirst({
                where: { id }
            });
            if (!tipoeventos)
                return res.status(404).json({ error: `tipoevento with id ${id} not found` });
            const updatetipoevento = yield postgres_1.prisma.tipoEvento.update({
                where: { id },
                data: updateTipoeventoDto.values
            });
            res.json(updatetipoevento);
        });
        this.deletetipoevento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const tipoeventos = yield postgres_1.prisma.tipoEvento.findFirst({
                where: { id }
            });
            if (!tipoeventos)
                return res.status(404).json({ error: `tipoevento with id${id} not found` });
            const deleted = yield postgres_1.prisma.tipoEvento.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `tipoevento with id ${id} not found` });
        });
    }
}
exports.TipoeventoController = TipoeventoController;

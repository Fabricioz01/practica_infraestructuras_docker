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
exports.CalificacionController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CalificacionController {
    constructor() {
        this.getCalificacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const calificacionx = yield postgres_1.prisma.calificacion.findMany();
            return res.json(calificacionx);
        });
        this.getCalificacionById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const calificacionx = yield postgres_1.prisma.calificacion.findFirst({
                where: { id }
            });
            (calificacionx)
                ? res.json()
                : res.status(404).json({ error: `Calificacion with id ${id} not found` });
        });
        this.createCalificacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCalificacionDto] = dtos_1.CreateCalificacionDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const calificacionx = yield postgres_1.prisma.calificacion.create({
                data: createCalificacionDto
            });
            res.json(calificacionx);
        });
        this.updateCalificacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateCalificacionDto] = dtos_1.UpdateCalificacionDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const calificacionx = yield postgres_1.prisma.calificacion.findFirst({
                where: { id }
            });
            if (!calificacionx)
                return res.status(404).json({ error: `Calificacion with id ${id} not found` });
            const updatedCalificacion = yield postgres_1.prisma.calificacion.update({
                where: { id },
                data: updateCalificacionDto.values
            });
            res.json(updatedCalificacion);
        });
        this.deleteCalificacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const calificacionx = yield postgres_1.prisma.calificacion.findFirst({
                where: { id }
            });
            if (!calificacionx)
                return res.status(404).json({ error: `Calificacion with id ${id} not found` });
            const deleted = yield postgres_1.prisma.calificacion.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Calificacion with id ${id} not found` });
        });
    }
}
exports.CalificacionController = CalificacionController;

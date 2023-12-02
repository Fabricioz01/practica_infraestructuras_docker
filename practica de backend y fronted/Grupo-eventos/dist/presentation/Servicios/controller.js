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
exports.ServicioController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ServicioController {
    //* DI
    constructor() {
        this.getServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const servicios = yield postgres_1.prisma.servicio.findMany();
            return res.json(servicios);
        });
        this.getServicioById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const servicios = yield postgres_1.prisma.servicio.findFirst({
                where: { id }
            });
            (servicios)
                ? res.json()
                : res.status(404).json({ error: `servicios with id ${id} not found` });
        });
        this.createServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createServicio] = dtos_1.CreateServicioDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const servicios = yield postgres_1.prisma.servicio.create({
                data: createServicio
            });
            res.json(servicios);
        });
        this.updateServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateServicioDto] = dtos_1.UpdateServicioDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const servicios = yield postgres_1.prisma.servicio.findFirst({
                where: { id }
            });
            if (!servicios)
                return res.status(404).json({ error: `servicios with id ${id} not found` });
            const updateservicio = yield postgres_1.prisma.servicio.update({
                where: { id },
                data: updateServicioDto.values
            });
            res.json(updateservicio);
        });
        this.deleteServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const servicios = yield postgres_1.prisma.servicio.findFirst({
                where: { id }
            });
            if (!servicios)
                return res.status(404).json({ error: `servicios with id${id} not found` });
            const deleted = yield postgres_1.prisma.servicio.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `servicio with id ${id} not found` });
        });
    }
}
exports.ServicioController = ServicioController;

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
exports.TpservicioController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class TpservicioController {
    //* DI
    constructor() {
        this.getTpservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tipoServicios = yield postgres_1.prisma.tipoServicio.findMany();
            return res.json(tipoServicios);
        });
        this.getTpservicioById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const tipoServicios = yield postgres_1.prisma.tipoServicio.findFirst({
                where: { id }
            });
            (tipoServicios)
                ? res.json()
                : res.status(404).json({ error: `tiposervicios with id ${id} not found` });
        });
        this.createTpservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createtpservicioDto] = dtos_1.CreatetpservicioDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const tiposervicios = yield postgres_1.prisma.tipoServicio.create({
                data: createtpservicioDto
            });
            res.json(tiposervicios);
        });
        this.updateTpservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateTipoServicioDto] = dtos_1.UpdateTipoServicioDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const tiposervicios = yield postgres_1.prisma.tipoServicio.findFirst({
                where: { id }
            });
            if (!tiposervicios)
                return res.status(404).json({ error: `tiposervicios with id ${id} not found` });
            const updatetiposervicio = yield postgres_1.prisma.tipoServicio.update({
                where: { id },
                data: updateTipoServicioDto.values
            });
            res.json(updatetiposervicio);
        });
        this.deleteTpservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const tipoServicios = yield postgres_1.prisma.tipoServicio.findFirst({
                where: { id }
            });
            if (!tipoServicios)
                return res.status(404).json({ error: `tiposervicios with id${id} not found` });
            const deleted = yield postgres_1.prisma.tipoServicio.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `tiposervicios with id ${id} not found` });
        });
    }
}
exports.TpservicioController = TpservicioController;

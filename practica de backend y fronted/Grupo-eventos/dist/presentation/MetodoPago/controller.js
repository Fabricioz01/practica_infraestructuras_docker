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
exports.MetodoPagoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class MetodoPagoController {
    constructor() {
        this.getMetodoPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const metodopagos = yield postgres_1.prisma.metodoPago.findMany();
            return res.json(metodopagos);
        });
        this.getMetodoPagoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const metodopago = yield postgres_1.prisma.metodoPago.findFirst({
                where: { id }
            });
            (metodopago)
                ? res.json()
                : res.status(404).json({ error: `MetodoPago with id ${id} not found` });
        });
        this.createMetodoPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createMetodoPagoDto] = dtos_1.CreateMetodoPagoDTO.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const metodopago = yield postgres_1.prisma.metodoPago.create({
                data: createMetodoPagoDto
            });
            res.json(metodopago);
        });
        this.updateMetodoPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateMetodoPagoDto] = dtos_1.UpdateMetodoPagoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const metodopago = yield postgres_1.prisma.metodoPago.findFirst({
                where: { id }
            });
            if (!metodopago)
                return res.status(404).json({ error: `MetodoPago with id ${id} not found` });
            const updatedMetodoPago = yield postgres_1.prisma.metodoPago.update({
                where: { id },
                data: updateMetodoPagoDto.values
            });
            res.json(updatedMetodoPago);
        });
        this.deleteMetodoPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const metodopago = yield postgres_1.prisma.metodoPago.findFirst({
                where: { id }
            });
            if (!metodopago)
                return res.status(404).json({ error: `MetodoPago with id ${id} not found` });
            const deleted = yield postgres_1.prisma.metodoPago.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `MetodoPago with id ${id} not found` });
        });
    }
}
exports.MetodoPagoController = MetodoPagoController;

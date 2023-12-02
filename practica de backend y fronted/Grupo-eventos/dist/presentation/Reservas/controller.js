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
exports.ReservasController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ReservasController {
    //* DI
    constructor() {
        this.getReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const reservas = yield postgres_1.prisma.reserva.findMany();
            return res.json(reservas);
        });
        this.getReservasById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const reservas = yield postgres_1.prisma.reserva.findFirst({
                where: { id }
            });
            (reservas)
                ? res.json()
                : res.status(404).json({ error: `reservas with id ${id} not found` });
        });
        this.createReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createReservaDto] = dtos_1.CreateReservaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const reservas = yield postgres_1.prisma.reserva.create({
                data: createReservaDto
            });
            res.json(reservas);
        });
        this.updateReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateReservaDto] = dtos_1.UpdateReservaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const reservas = yield postgres_1.prisma.reserva.findFirst({
                where: { id }
            });
            if (!reservas)
                return res.status(404).json({ error: `reserva with id ${id} not found` });
            const updatereserva = yield postgres_1.prisma.reserva.update({
                where: { id },
                data: updateReservaDto.values
            });
            res.json(updatereserva);
        });
        this.deleteReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const reservas = yield postgres_1.prisma.reserva.findFirst({
                where: { id }
            });
            if (!reservas)
                return res.status(404).json({ error: `reserva with id${id} not found` });
            const deleted = yield postgres_1.prisma.reserva.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `reserva with id ${id} not found` });
        });
    }
}
exports.ReservasController = ReservasController;

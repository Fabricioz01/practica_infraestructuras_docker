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
exports.PagoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class PagoController {
    //* DI
    constructor() {
        this.getPago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagos = yield postgres_1.prisma.pago.findMany();
            return res.json(pagos);
        });
        this.getPagoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const pagos = yield postgres_1.prisma.pago.findFirst({
                where: { id }
            });
            (pagos)
                ? res.json()
                : res.status(404).json({ error: `pagos with id ${id} not found` });
        });
        this.createPagoDTO = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPagoDTO] = dtos_1.CreatePagoDTO.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const pagos = yield postgres_1.prisma.pago.create({
                data: createPagoDTO
            });
            res.json(pagos);
        });
        this.updatepagos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updatePagoDto] = dtos_1.UpdatePagoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const pagos = yield postgres_1.prisma.pago.findFirst({
                where: { id }
            });
            if (!pagos)
                return res.status(404).json({ error: `pagos with id ${id} not found` });
            const updatepago = yield postgres_1.prisma.pago.update({
                where: { id },
                data: updatePagoDto.values
            });
            res.json(updatepago);
        });
        this.deletepago = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const pagos = yield postgres_1.prisma.pago.findFirst({
                where: { id }
            });
            if (!pagos)
                return res.status(404).json({ error: `pagos with id${id} not found` });
            const deleted = yield postgres_1.prisma.pago.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `pago with id ${id} not found` });
        });
    }
}
exports.PagoController = PagoController;

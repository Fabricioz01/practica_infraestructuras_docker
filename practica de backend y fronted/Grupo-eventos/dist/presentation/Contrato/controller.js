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
exports.ContratoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ContratoController {
    constructor() {
        this.getContrato = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const contratos = yield postgres_1.prisma.contrato.findMany();
            return res.json(contratos);
        });
        this.getContratoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const contrato = yield postgres_1.prisma.contrato.findFirst({
                where: { id }
            });
            (contrato)
                ? res.json(contrato)
                : res.status(404).json({ error: `Contrato with id ${id} not found` });
        });
        this.createContrato = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createContratoDto] = dtos_1.CreateContratoDTO.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const contrato = yield postgres_1.prisma.contrato.create({
                data: createContratoDto
            });
            res.json(contrato);
        });
        this.updateContrato = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateContratoDto] = dtos_1.UpdateContratoDTO.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const contrato = yield postgres_1.prisma.contrato.findFirst({
                where: { id }
            });
            if (!contrato)
                return res.status(404).json({ error: `Contrato with id ${id} not found` });
            const updatedContrato = yield postgres_1.prisma.contrato.update({
                where: { id },
                data: updateContratoDto.values
            });
            res.json(updatedContrato);
        });
        this.deleteContrato = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const contrato = yield postgres_1.prisma.contrato.findFirst({
                where: { id }
            });
            if (!contrato)
                return res.status(404).json({ error: `Contrato with id ${id} not found` });
            const deleted = yield postgres_1.prisma.contrato.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Contrato with id ${id} not found` });
        });
    }
}
exports.ContratoController = ContratoController;

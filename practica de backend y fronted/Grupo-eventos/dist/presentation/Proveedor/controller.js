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
exports.ProveedorController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ProveedorController {
    constructor() {
        this.getProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const proveedores = yield postgres_1.prisma.proveedor.findMany();
            return res.json(proveedores);
        });
        this.getProveedorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const proveedor = yield postgres_1.prisma.proveedor.findFirst({
                where: { id }
            });
            (proveedor)
                ? res.json(proveedor)
                : res.status(404).json({ error: `Proveedor with id ${id} not found` });
        });
        this.createProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createProveedorDto] = dtos_1.CreateProveedorDTO.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const proveedor = yield postgres_1.prisma.proveedor.create({
                data: createProveedorDto
            });
            res.json(proveedor);
        });
        this.updateProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateProveedorDto] = dtos_1.UpdateProveedorDTO.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const proveedor = yield postgres_1.prisma.proveedor.findFirst({
                where: { id }
            });
            if (!proveedor)
                return res.status(404).json({ error: `Proveedor with id ${id} not found` });
            const updatedProveedor = yield postgres_1.prisma.proveedor.update({
                where: { id },
                data: updateProveedorDto.values
            });
            res.json(updatedProveedor);
        });
        this.deleteProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const proveedor = yield postgres_1.prisma.proveedor.findFirst({
                where: { id }
            });
            if (!proveedor)
                return res.status(404).json({ error: `Proveedor with id ${id} not found` });
            const deleted = yield postgres_1.prisma.proveedor.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Proveedor with id ${id} not found` });
        });
    }
}
exports.ProveedorController = ProveedorController;

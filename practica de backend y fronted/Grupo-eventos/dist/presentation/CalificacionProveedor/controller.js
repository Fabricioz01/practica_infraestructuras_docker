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
exports.CalificacionProveedorController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CalificacionProveedorController {
    constructor() {
        this.getCalificacionProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const calificacionprox = yield postgres_1.prisma.calificacionProveedor.findMany();
            return res.json(calificacionprox);
        });
        this.getCalificacionProveedorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'id argument is not a number' });
            const calificacionprox = yield postgres_1.prisma.calificacionProveedor.findFirst({
                where: { id }
            });
            (calificacionprox)
                ? res.json()
                : res.status(404).json({ error: `CalificacionProveedor with id ${id} not found` });
        });
        this.createCalificacionProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCalificacionProveedorDto] = dtos_1.CreateCalificacionProveedorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const calificacionprox = yield postgres_1.prisma.calificacionProveedor.create({
                data: createCalificacionProveedorDto
            });
            res.json(calificacionprox);
        });
        this.updateCalificacionProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateCalificacionProveedorDto] = dtos_1.UpdateCalificacionProveedorDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const calificacionprox = yield postgres_1.prisma.calificacionProveedor.findFirst({
                where: { id }
            });
            if (!calificacionprox)
                return res.status(404).json({ error: `CalificacionProveedor with id ${id} not found` });
            const updatedCalificacionpro = yield postgres_1.prisma.calificacion.update({
                where: { id },
                data: updateCalificacionProveedorDto.values
            });
            res.json(updatedCalificacionpro);
        });
        this.deleteCalificacionProveedor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const calificacionprox = yield postgres_1.prisma.calificacionProveedor.findFirst({
                where: { id }
            });
            if (!calificacionprox)
                return res.status(404).json({ error: `CalificacionProveedor with id ${id} not found` });
            const deleted = yield postgres_1.prisma.calificacionProveedor.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `CalificacionProveedor with id ${id} not found` });
        });
    }
}
exports.CalificacionProveedorController = CalificacionProveedorController;

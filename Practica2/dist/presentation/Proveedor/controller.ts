import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateProveedorDTO, UpdateProveedorDTO} from '../../domain/dtos';

export class ProveedorController {
  constructor() { }

  public getProveedor = async (req: Request, res: Response) => {
    const proveedores = await prisma.proveedor.findMany();
    return res.json(proveedores);
  };

  public getProveedorById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'id argument is not a number' });

    const proveedor = await prisma.proveedor.findFirst({
      where: { id }
    });

    (proveedor)
      ? res.json(proveedor)
      : res.status(404).json({ error: `Proveedor with id ${id} not found` });
  };

  public createProveedor = async (req: Request, res: Response) => {
    const [error, createProveedorDto] = CreateProveedorDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    const proveedor = await prisma.proveedor.create({
      data: createProveedorDto!
    });

    res.json(proveedor);
  };

  public updateProveedor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateProveedorDto] = UpdateProveedorDTO.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const proveedor = await prisma.proveedor.findFirst({
      where: { id }
    });
    if (!proveedor) return res.status(404).json({ error: `Proveedor with id ${id} not found` });
    const updatedProveedor = await prisma.proveedor.update({
      where: { id },
      data: updateProveedorDto!.values
    });
    res.json(updatedProveedor);
  };

  public deleteProveedor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const proveedor = await prisma.proveedor.findFirst({
      where: { id }
    });

    if (!proveedor) return res.status(404).json({ error: `Proveedor with id ${id} not found` });
    const deleted = await prisma.proveedor.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Proveedor with id ${id} not found` });
  };
}

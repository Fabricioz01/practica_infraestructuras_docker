import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCalificacionProveedorDto, UpdateCalificacionProveedorDto } from '../../domain/dtos'

export class CalificacionProveedorController {
  constructor() { }

  public getCalificacionProveedor = async (req: Request, res: Response) => {
    const calificacionprox = await prisma.calificacionProveedor.findMany();
    return res.json(calificacionprox);
  };

  public getCalificacionProveedorById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'id argument is not a number' });

    const calificacionprox = await prisma.calificacionProveedor.findFirst({
      where: { id }
    });

    (calificacionprox)
      ? res.json()
      : res.status(404).json({ error: `CalificacionProveedor with id ${id} not found` });
  };

  public createCalificacionProveedor = async (req: Request, res: Response) => {
    const [error, createCalificacionProveedorDto] = CreateCalificacionProveedorDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const calificacionprox = await prisma.calificacionProveedor.create({
      data: createCalificacionProveedorDto!
    });

    res.json(calificacionprox);
  };

  public updateCalificacionProveedor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCalificacionProveedorDto] = UpdateCalificacionProveedorDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const calificacionprox = await prisma.calificacionProveedor.findFirst({
      where: { id }
    });
    if (!calificacionprox) return res.status(404).json({ error: `CalificacionProveedor with id ${id} not found` });

    const updatedCalificacionpro = await prisma.calificacion.update({
      where: { id },
      data: updateCalificacionProveedorDto!.values
    });

    res.json(updatedCalificacionpro);
  };

  public deleteCalificacionProveedor= async (req: Request, res: Response) => {
    const id = +req.params.id;
    const calificacionprox = await prisma.calificacionProveedor.findFirst({
      where: { id }
    });

    if (!calificacionprox) return res.status(404).json({ error: `CalificacionProveedor with id ${id} not found` });

    const deleted = await prisma.calificacionProveedor.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `CalificacionProveedor with id ${id} not found` });
  };
}
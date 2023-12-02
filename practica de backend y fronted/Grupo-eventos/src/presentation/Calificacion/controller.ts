import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCalificacionDto, UpdateCalificacionDto } from '../../domain/dtos'

export class CalificacionController {
  constructor() { }

  public getCalificacion = async (req: Request, res: Response) => {
    const calificacionx = await prisma.calificacion.findMany();
    return res.json(calificacionx);
  };

  public getCalificacionById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'id argument is not a number' });

    const calificacionx = await prisma.calificacion.findFirst({
      where: { id }
    });

    (calificacionx)
      ? res.json()
      : res.status(404).json({ error: `Calificacion with id ${id} not found` });
  };

  public createCalificacion = async (req: Request, res: Response) => {
    const [error, createCalificacionDto] = CreateCalificacionDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const calificacionx = await prisma.calificacion.create({
      data: createCalificacionDto!
    });

    res.json(calificacionx);
  };

  public updateCalificacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCalificacionDto] = UpdateCalificacionDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const calificacionx = await prisma.calificacion.findFirst({
      where: { id }
    });
    if (!calificacionx) return res.status(404).json({ error: `Calificacion with id ${id} not found` });

    const updatedCalificacion = await prisma.calificacion.update({
      where: { id },
      data: updateCalificacionDto!.values
    });

    res.json(updatedCalificacion);
  };

  public deleteCalificacion= async (req: Request, res: Response) => {
    const id = +req.params.id;
    const calificacionx = await prisma.calificacion.findFirst({
      where: { id }
    });

    if (!calificacionx) return res.status(404).json({ error: `Calificacion with id ${id} not found` });

    const deleted = await prisma.calificacion.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Calificacion with id ${id} not found` });
  };
}
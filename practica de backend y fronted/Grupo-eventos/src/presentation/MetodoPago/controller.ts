import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateMetodoPagoDTO, UpdateMetodoPagoDto} from '../../domain/dtos';

export class MetodoPagoController {
  constructor() { }

  public getMetodoPago = async (req: Request, res: Response) => {
    const metodopagos = await prisma.metodoPago.findMany();
    return res.json(metodopagos);
  };

  public getMetodoPagoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'id argument is not a number' });

    const metodopago = await prisma.metodoPago.findFirst({
      where: { id }
    });

    (metodopago)
      ? res.json()
      : res.status(404).json({ error: `MetodoPago with id ${id} not found` });
  };

  public createMetodoPago = async (req: Request, res: Response) => {
    const [error, createMetodoPagoDto] = CreateMetodoPagoDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    const metodopago = await prisma.metodoPago.create({
      data: createMetodoPagoDto!
    });

    res.json(metodopago);
  };

  public updateMetodoPago = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateMetodoPagoDto] = UpdateMetodoPagoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const metodopago = await prisma.metodoPago.findFirst({
      where: { id }
    });
    if (!metodopago) return res.status(404).json({ error: `MetodoPago with id ${id} not found` });
    const updatedMetodoPago = await prisma.metodoPago.update({
      where: { id },
      data: updateMetodoPagoDto!.values
    });
    res.json(updatedMetodoPago);
  };

  public deleteMetodoPago = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const metodopago = await prisma.metodoPago.findFirst({
      where: { id }
    });

    if (!metodopago) return res.status(404).json({ error: `MetodoPago with id ${id} not found` });
    const deleted = await prisma.metodoPago.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `MetodoPago with id ${id} not found` });
  };
}

import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import {CreateContratoDTO, UpdateContratoDTO} from '../../domain/dtos'


export class ContratoController {
  constructor() { }

  public getContrato = async (req: Request, res: Response) => {
    const contratos = await prisma.contrato.findMany();
    return res.json(contratos);
  };

  public getContratoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'id argument is not a number' });

    const contrato = await prisma.contrato.findFirst({
      where: { id }
    });

    (contrato)
      ? res.json(contrato)
      : res.status(404).json({ error: `Contrato with id ${id} not found` });
  };

  public createContrato = async (req: Request, res: Response) => {
    const [error, createContratoDto] = CreateContratoDTO.create(req.body);
    if (error) return res.status(400).json({ error });

    const contrato = await prisma.contrato.create({
      data: createContratoDto!
    });

    res.json(contrato);
  };

  public updateContrato = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateContratoDto] = UpdateContratoDTO.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const contrato = await prisma.contrato.findFirst({
      where: { id }
    });
    if (!contrato) return res.status(404).json({ error: `Contrato with id ${id} not found` });

    const updatedContrato = await prisma.contrato.update({
      where: { id },
      data: updateContratoDto!.values
    });

    res.json(updatedContrato);
  };

  public deleteContrato = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const contrato = await prisma.contrato.findFirst({
      where: { id }
    });

    if (!contrato) return res.status(404).json({ error: `Contrato with id ${id} not found` });

    const deleted = await prisma.contrato.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Contrato with id ${id} not found` });
  };
}

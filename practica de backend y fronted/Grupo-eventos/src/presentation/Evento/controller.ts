import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEventoDto, UpdateEventoDto } from '../../domain/dtos';


export class EventoController {
  //* DI
  constructor() { }
  public getEvento = async( req: Request, res: Response ) => {
    const eventos = await prisma.evento.findMany();
    return res.json( eventos );
  };
  public getEventoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const evento = await prisma.evento.findFirst({
      where: { id }
    });
    
    ( evento )
      ? res.json( )
      : res.status( 404 ).json( { error: `evento with id ${ id } not found` } );
  };
  public createEvento = async (req: Request, res: Response) => {
    const [error, createEventoDto] = CreateEventoDto.create(req.body);
    if (error) return res.status(400).json({ error });
  
    const eventos = await prisma.evento.create({
      data: createEventoDto!
    });
  
    res.json(eventos);
  };
  
  public updateevento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateEventoDto] = UpdateEventoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const eventos = await prisma.evento.findFirst({
      where: { id }
    });
    if (!eventos) return res.status(404).json({ error: `evento with id ${id} not found` });
    const updateevento = await prisma.evento.update({
      where: { id },
      data: updateEventoDto!.values
    });
    res.json(updateevento);
  };


  public deleteevento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const eventos = await prisma.evento.findFirst({
      where: { id }
    });

    if (!eventos) return res.status(404).json({ error: `evento with id${id} not found` });
    const deleted = await prisma.evento.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `evento with id ${id} not found` });
  };
}

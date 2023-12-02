import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateReservaDto, UpdateReservaDto } from '../../domain/dtos';


export class ReservasController {
  //* DI
  constructor() { }
  public getReservas = async( req: Request, res: Response ) => {
    const reservas = await prisma.reserva.findMany();
    return res.json( reservas );
  };
  public getReservasById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const reservas = await prisma.reserva.findFirst({
      where: { id }
    });

    ( reservas )
      ? res.json( )
      : res.status( 404 ).json( { error: `reservas with id ${ id } not found` } );
  };
  public createReservas = async( req: Request, res: Response ) => {
    
    const [error, createReservaDto] = CreateReservaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const reservas = await prisma.reserva.create({
      data: createReservaDto!
    });

    res.json( reservas );

  };
  public updateReservas = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateReservaDto] = UpdateReservaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const reservas = await prisma.reserva.findFirst({
      where: { id }
    });
    if (!reservas) return res.status(404).json({ error: `reserva with id ${id} not found` });
    const updatereserva= await prisma.reserva.update({
      where: { id },
      data: updateReservaDto!.values
    });
    res.json(updatereserva);
  };


  public deleteReservas = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const reservas = await prisma.reserva.findFirst({
      where: { id }
    });

    if (!reservas) return res.status(404).json({ error: `reserva with id${id} not found` });
    const deleted = await prisma.reserva.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `reserva with id ${id} not found` });
  };
}
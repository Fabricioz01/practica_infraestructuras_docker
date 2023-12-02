import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateServicioDto, UpdateServicioDto } from '../../domain/dtos';


export class ServicioController {
  //* DI
  constructor() { }
  public getServicio = async( req: Request, res: Response ) => {
    const servicios = await prisma.servicio.findMany();
    return res.json( servicios );
  };
  public getServicioById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const servicios = await prisma.servicio.findFirst({
      where: { id }
    });
    
    ( servicios )
      ? res.json( )
      : res.status( 404 ).json( { error: `servicios with id ${ id } not found` } );
  };
  public createServicio = async( req: Request, res: Response ) => {
    
    const [error, createServicio] = CreateServicioDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const servicios = await prisma.servicio.create({
      data: createServicio!
    });

    res.json( servicios );

  };
  public updateServicio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateServicioDto] = UpdateServicioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const servicios = await prisma.servicio.findFirst({
      where: { id }
    });
    if (!servicios) return res.status(404).json({ error: `servicios with id ${id} not found` });
    const updateservicio= await prisma.servicio.update({
      where: { id },
      data: updateServicioDto!.values
    });
    res.json(updateservicio);
  };


  public deleteServicio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const servicios = await prisma.servicio.findFirst({
      where: { id }
    });

    if (!servicios) return res.status(404).json({ error: `servicios with id${id} not found` });
    const deleted = await prisma.servicio.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `servicio with id ${id} not found` });
  };
}
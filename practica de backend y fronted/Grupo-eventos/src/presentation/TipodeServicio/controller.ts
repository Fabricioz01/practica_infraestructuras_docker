import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatetpservicioDto, UpdateTipoServicioDto } from '../../domain/dtos';


export class TpservicioController {
  //* DI
  constructor() { }
  public getTpservicio = async( req: Request, res: Response ) => {
    const tipoServicios = await prisma.tipoServicio.findMany();
    return res.json( tipoServicios );
  };
  public getTpservicioById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const tipoServicios = await prisma.tipoServicio.findFirst({
      where: { id }
    });
    
    ( tipoServicios )
      ? res.json( )
      : res.status( 404 ).json( { error: `tiposervicios with id ${ id } not found` } );
  };
  public createTpservicio = async( req: Request, res: Response ) => {
    
    const [error, createtpservicioDto] = CreatetpservicioDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tiposervicios = await prisma.tipoServicio.create({
      data: createtpservicioDto!
    });

    res.json( tiposervicios );

  };
  public updateTpservicio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTipoServicioDto] = UpdateTipoServicioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const tiposervicios = await prisma.tipoServicio.findFirst({
      where: { id }
    });
    if (!tiposervicios) return res.status(404).json({ error: `tiposervicios with id ${id} not found` });
    const updatetiposervicio= await prisma.tipoServicio.update({
      where: { id },
      data: updateTipoServicioDto!.values
    });
    res.json(updatetiposervicio);
  };


  public deleteTpservicio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const tipoServicios = await prisma.tipoServicio.findFirst({
      where: { id }
    });

    if (!tipoServicios) return res.status(404).json({ error: `tiposervicios with id${id} not found` });
    const deleted = await prisma.tipoServicio.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `tiposervicios with id ${id} not found` });
  };
}
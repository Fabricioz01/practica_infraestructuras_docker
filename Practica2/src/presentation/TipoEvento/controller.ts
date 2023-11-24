import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTipoEventoDto, UpdateTipoEventoDto } from '../../domain/dtos';


export class TipoeventoController {
  //* DI
  constructor() { }
  public getTipoEvento = async( req: Request, res: Response ) => {
    const tipoeventos = await prisma.tipoEvento.findMany();
    return res.json( tipoeventos );
  };
  public getTipoEventoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const tipoeventos = await prisma.tipoEvento.findFirst({
      where: { id }
    });
    
    ( tipoeventos )
      ? res.json( )
      : res.status( 404 ).json( { error: `tipoevento with id ${ id } not found` } );
  };
  public createTipoEvento = async( req: Request, res: Response ) => {
    
    const [error, createTipoEventoDto] = CreateTipoEventoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tipoeventos = await prisma.tipoEvento.create({
      data: createTipoEventoDto!
    });

    res.json( tipoeventos );

  };
  public updatetipoevento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTipoeventoDto] = UpdateTipoEventoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const tipoeventos = await prisma.tipoEvento.findFirst({
      where: { id }
    });
    if (!tipoeventos) return res.status(404).json({ error: `tipoevento with id ${id} not found` });
    const updatetipoevento = await prisma.tipoEvento.update({
      where: { id },
      data: updateTipoeventoDto!.values
    });
    res.json(updatetipoevento);
  };


  public deletetipoevento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const tipoeventos = await prisma.tipoEvento.findFirst({
      where: { id }
    });

    if (!tipoeventos) return res.status(404).json({ error: `tipoevento with id${id} not found` });
    const deleted = await prisma.tipoEvento.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `tipoevento with id ${id} not found` });
  };
}

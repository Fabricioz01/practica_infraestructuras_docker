import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePagoDTO, UpdatePagoDto } from '../../domain/dtos';


export class PagoController {
  //* DI
  constructor() { }
  public getPago = async( req: Request, res: Response ) => {
    const pagos = await prisma.pago.findMany();
    return res.json( pagos );
  };
  public getPagoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const pagos = await prisma.pago.findFirst({
      where: { id }
    });
    
    ( pagos )
      ? res.json( )
      : res.status( 404 ).json( { error: `pagos with id ${ id } not found` } );
  };
  public createPagoDTO = async( req: Request, res: Response ) => {
    
    const [error, createPagoDTO] = CreatePagoDTO.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const pagos = await prisma.pago.create({
      data: createPagoDTO!
    });

    res.json( pagos );

  };
  public updatepagos = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePagoDto] = UpdatePagoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const pagos = await prisma.pago.findFirst({
      where: { id }
    });
    if (!pagos) return res.status(404).json({ error: `pagos with id ${id} not found` });
    const updatepago = await prisma.pago.update({
      where: { id },
      data: updatePagoDto!.values
    });
    res.json(updatepago);
  };


  public deletepago = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const pagos = await prisma.pago.findFirst({
      where: { id }
    });

    if (!pagos) return res.status(404).json({ error: `pagos with id${id} not found` });
    const deleted = await prisma.pago.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `pago with id ${id} not found` });
  };
}

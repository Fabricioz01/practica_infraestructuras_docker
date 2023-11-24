import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePersonaDto, UpdatePersonaDto } from '../../domain/dtos';


export class PersonaController {
  //* DI
  constructor() { }
  public getPersona = async( req: Request, res: Response ) => {
    const personas = await prisma.persona.findMany();
    return res.json( personas );
  };
  public getPersonaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const personas = await prisma.persona.findFirst({
      where: { id }
    });
    
    ( personas )
      ? res.json( )
      : res.status( 404 ).json( { error: `personas with id ${ id } not found` } );
  };
  public createPersona = async( req: Request, res: Response ) => {
    
    const [error, createPersonaDto] = CreatePersonaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const personas = await prisma.persona.create({
      data: createPersonaDto!
    });

    res.json( personas );

  };
  public updatepersona = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePersonaDto] = UpdatePersonaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const personas = await prisma.persona.findFirst({
      where: { id }
    });
    if (!personas) return res.status(404).json({ error: `persona with id ${id} not found` });
    const updatepersona = await prisma.persona.update({
      where: { id },
      data: updatePersonaDto!.values
    });
    res.json(updatepersona);
  };


  public deletepersona = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const personas = await prisma.persona.findFirst({
      where: { id }
    });

    if (!personas) return res.status(404).json({ error: `personas with id${id} not found` });
    const deleted = await prisma.persona.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `persona with id ${id} not found` });
  };
}

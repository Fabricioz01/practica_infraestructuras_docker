import { CreateContratoDto, UpdateContratoDto } from '../dtos';  // Cambio en la importación
import { ContratoEntity } from '../entities/contrato.entity';  // Cambio en la importación

export abstract class ContratoDatasource {  // Cambio en el nombre de la clase

  abstract create(createContratoDto: CreateContratoDto): Promise<ContratoEntity>;  // Cambio en el tipo de retorno

  abstract getAll(): Promise<ContratoEntity[]>;  // Cambio en el tipo de retorno

  abstract findById(id: number): Promise<ContratoEntity>;  // Cambio en el tipo de retorno
  abstract updateById(updateContratoDto: UpdateContratoDto): Promise<ContratoEntity>;  // Cambio en el tipo de retorno
  abstract deleteById(id: number): Promise<ContratoEntity>;  // Cambio en el tipo de retorno

}

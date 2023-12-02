import { CreateProveedorDto, UpdateProveedorDto } from '../dtos';  // Cambio en la importación
import { ProveedorEntity } from '../entities/proveedor.entity';  // Cambio en la importación

export abstract class ProveedorRepository {  // Cambio en el nombre de la clase

  abstract create(createProveedorDto: CreateProveedorDto): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno

  abstract getAll(): Promise<ProveedorEntity[]>;  // Cambio en el tipo de retorno

  abstract findById(id: number): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno
  abstract updateById(updateProveedorDto: UpdateProveedorDto): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno
  abstract deleteById(id: number): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno

}

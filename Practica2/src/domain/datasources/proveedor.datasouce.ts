import { CreateProveedorDto, UpdateProveedorDto } from '../dtos';
import { ProveedorEntity} from '../entities/proveedor.entity';




export abstract class ProveedorDatasource {  // Cambio en el nombre de la clase

  abstract create(createProveedorDto: CreateProveedorDto): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno

  abstract getAll(): Promise<ProveedorEntity[]>;  // Cambio en el tipo de retorno

  abstract findById(id: number): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno
  abstract updateById(updateProveedorDto: UpdateProveedorDto): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno
  abstract deleteById(id: number): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno

}

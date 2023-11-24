
import { CreateProveedorDto } from '../../dtos';  // Cambio en la importación
import { ProveedorEntity } from '../../entities/proveedor.entity';  // Cambio en la importación
import { ProveedorRepository } from '../../repositories/proveedor.repository';  // Cambio en la importación

export interface CreateProveedorUseCase {  // Cambio en el nombre de la interfaz
  execute(dto: CreateProveedorDto): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno
}

export class CreateProveedor implements CreateProveedorUseCase {  // Cambio en el nombre de la clase

  constructor(
    private readonly repository: ProveedorRepository,  // Cambio en el tipo de repositorio
  ) {}

  execute(dto: CreateProveedorDto): Promise<ProveedorEntity> {  // Cambio en el tipo de parámetro
    return this.repository.create(dto);
  }

}


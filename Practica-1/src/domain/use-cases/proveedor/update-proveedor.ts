import { UpdateProveedorDto } from '../../dtos';  // Cambio en la importación
import { ProveedorEntity } from '../../entities/proveedor.entity';
import { ProveedorRepository } from '../../repositories/proveedor.repository';

export interface UpdateProveedorUseCase {  // Cambio en el nombre de la interfaz
  execute(dto: UpdateProveedorDto): Promise<ProveedorEntity>;  // Cambio en el tipo de retorno
}

export class UpdateProveedor implements UpdateProveedorUseCase {  // Cambio en el nombre de la clase

  constructor(
    private readonly repository: ProveedorRepository,
  ) {}

  execute(dto: UpdateProveedorDto): Promise<ProveedorEntity> {  // Cambio en el tipo de parámetro y de retorno
    return this.repository.updateById(dto);
  }

}

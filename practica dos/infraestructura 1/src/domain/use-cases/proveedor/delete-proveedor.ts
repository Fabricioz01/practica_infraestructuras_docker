import { ProveedorEntity } from '../../entities/proveedor.entity';
import { ProveedorRepository } from '../../repositories/proveedor.repository';

export interface DeleteProveedorUseCase {
  execute(id: number): Promise<ProveedorEntity>;
}

export class DeleteProveedor implements DeleteProveedorUseCase {

  constructor(
    private readonly repository: ProveedorRepository,
  ) {}

  execute(id: number): Promise<ProveedorEntity> {
    return this.repository.deleteById(id);
  }

}

import { ProveedorEntity } from '../../entities/proveedor.entity';
import { ProveedorRepository } from '../../repositories/proveedor.repository';

export interface GetProveedorUseCase {
  execute(id: number): Promise<ProveedorEntity>;
}

export class GetProveedor implements GetProveedorUseCase {

  constructor(
    private readonly repository: ProveedorRepository,
  ) {}

  execute(id: number): Promise<ProveedorEntity> {
    return this.repository.findById(id);
  }

}

import { ProveedorEntity } from '../../entities/proveedor.entity';
import { ProveedorRepository } from '../../repositories/proveedor.repository';

export interface GetProveedoresUseCase {
  execute(): Promise<ProveedorEntity[]>;
}

export class GetProveedores implements GetProveedoresUseCase {
  constructor(private readonly repository: ProveedorRepository) {}

  execute(): Promise<ProveedorEntity[]> {
    return this.repository.getAll();
  }
}

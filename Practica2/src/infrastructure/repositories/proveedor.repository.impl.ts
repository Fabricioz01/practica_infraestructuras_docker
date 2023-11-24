import { CreateProveedorDto, ProveedorDatasource, ProveedorEntity, ProveedorRepository, UpdateProveedorDto } from '../../domain';

export class ProveedorRepositoryImpl implements ProveedorRepository {

  constructor(
    private readonly datasource: ProveedorDatasource,
  ) { }

  create(createProveedorDto: CreateProveedorDto): Promise<ProveedorEntity> {
    return this.datasource.create(createProveedorDto);
  }

  getAll(): Promise<ProveedorEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<ProveedorEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateProveedorDto: UpdateProveedorDto): Promise<ProveedorEntity> {
    return this.datasource.updateById(updateProveedorDto);
  }

  deleteById(id: number): Promise<ProveedorEntity> {
    return this.datasource.deleteById(id);
  }
}

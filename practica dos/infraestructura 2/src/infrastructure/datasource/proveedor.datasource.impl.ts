import { prisma } from '../../data/postgres';
import { CreateProveedorDto, ProveedorDatasource, ProveedorEntity, UpdateProveedorDto } from '../../domain';

export class ProveedorDatasourceImpl implements ProveedorDatasource {

  async create(createProveedorDto: CreateProveedorDto): Promise<ProveedorEntity> {
    const proveedor = await prisma.proveedor.create({
      data: createProveedorDto!
    });

    return ProveedorEntity.fromObject(proveedor);
  }

  async getAll(): Promise<ProveedorEntity[]> {
    const proveedores = await prisma.proveedor.findMany();
    return proveedores.map(proveedor => ProveedorEntity.fromObject(proveedor));
  }

  async findById(id_proveedor: number): Promise<ProveedorEntity> {
    const proveedor = await prisma.proveedor.findFirst({
      where: { id_proveedor }
    });

    if (!proveedor) throw `Proveedor with id ${id_proveedor} not found`;
    return ProveedorEntity.fromObject(proveedor);
  }

  async updateById(updateProveedorDto: UpdateProveedorDto): Promise<ProveedorEntity> {
    await this.findById(updateProveedorDto.id);

    const updatedProveedor = await prisma.proveedor.update({
      where: { id_proveedor: updateProveedorDto.id },
      data: updateProveedorDto!.values
    });

    return ProveedorEntity.fromObject(updatedProveedor);
  }

  async deleteById(id_proveedor: number): Promise<ProveedorEntity> {
    await this.findById(id_proveedor);
    const deleted = await prisma.proveedor.delete({
      where: { id_proveedor }
    });

    return ProveedorEntity.fromObject(deleted);
  }
}

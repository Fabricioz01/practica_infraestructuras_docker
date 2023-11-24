import { CreateClienteDto, UpdateClienteDto } from '../dtos';  // Cambio en la importación
import { ClienteEntity } from '../entities/cliente.entity';  // Cambio en la importación

export abstract class ClienteDatasource {  // Cambio en el nombre de la clase

  abstract create(createClienteDto: CreateClienteDto): Promise<ClienteEntity>;  // Cambio en el tipo de retorno

  abstract getAll(): Promise<ClienteEntity[]>;  // Cambio en el tipo de retorno

  abstract findById(id: number): Promise<ClienteEntity>;  // Cambio en el tipo de retorno
  abstract updateById(updateClienteDto: UpdateClienteDto): Promise<ClienteEntity>;  // Cambio en el tipo de retorno
  abstract deleteById(id: number): Promise<ClienteEntity>;  // Cambio en el tipo de retorno

}

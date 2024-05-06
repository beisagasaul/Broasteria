import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class EmpleadosService {
  constructor(@InjectRepository(Empleado) private empleadosRepository: Repository<Empleado>,
  ) { }
  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const existe = await this.empleadosRepository.findOneBy({
      nombres: createEmpleadoDto.nombres.trim(),
      usuario: { id: createEmpleadoDto.idUsuario },
    })
    if (existe) {
      throw new ConflictException(`El empleado ya existe`)
    }
    return this.empleadosRepository.save({
      nombres: createEmpleadoDto.nombres.trim(),
      apellidos: createEmpleadoDto.apellidos.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      salario: createEmpleadoDto.salario,
      fechaContratacion: createEmpleadoDto.fechaContratacion,
      usuario: { id: createEmpleadoDto.idUsuario },

    })
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Empleado> {
    const existeEmpleado = await this.empleadosRepository.findOne({
      where: { id },
      relations: ['usuario']

    })
    if (!existeEmpleado) {
      throw new NotFoundException(`EL empleado con el id ${id} no existe`)
    }
    return existeEmpleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.findOne(id);
    const actualizarEmpleado = Object.assign(empleado, updateEmpleadoDto);
    actualizarEmpleado.usuario = { id: updateEmpleadoDto.idUsuario } as Usuario;
    return this.empleadosRepository.save(actualizarEmpleado);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id)
    return this.empleadosRepository.delete(empleado.id);
  }
}

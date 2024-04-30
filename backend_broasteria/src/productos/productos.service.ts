import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class ProductosService {

  constructor(@InjectRepository(Producto) private productosRepository: Repository<Producto>) { }



  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const existe = await this.productosRepository.findOneBy({
      nombre: createProductoDto.nombre.trim(),
      categoria: { id: createProductoDto.idCategoria },
    });
    if (existe) {
      throw new ConflictException('El producto ya existe');
    }
    return this.productosRepository.save({
      nombre: createProductoDto.nombre.trim(),
      descripcion: createProductoDto.descripcion.trim(),
      precioUnitario: createProductoDto.precioUnitario,
      stock: createProductoDto.stock,
      categoria: { id: createProductoDto.idCategoria },

    });
  }

  async findAll(): Promise<Producto[]> {

    return this.productosRepository.find({ relations: ['categoria'] });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productosRepository.findOne({
      where: { id },
      relations: ['categoria'],
    });
    if (!producto) {
      throw new NotFoundException(`El producto con el id  ${id} no existe`);
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    const actualizarProducto = Object.assign(producto, updateProductoDto);
   actualizarProducto.categoria = { id: updateProductoDto.idCategoria } as Categoria;
    return this.productosRepository.save(actualizarProducto);
  }

 async  remove(id: number) {
  const producto = await this.findOne(id);
  return this.productosRepository.delete(producto.id);
  }
}

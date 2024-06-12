
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    try {
      return await this.productosService.create(createProductoDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException({
          status: HttpStatus.CONFLICT,
          error: 'El producto ya existe',
        }, HttpStatus.CONFLICT);
      }
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Error al crear el producto',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}

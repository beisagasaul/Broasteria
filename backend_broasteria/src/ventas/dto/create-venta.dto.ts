import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateVentaDto {


    @ApiProperty()
    @IsNotEmpty({ message: 'el campo fecha no debe ser vacio' })
    @IsString({ message: 'El campo fecha debe ser de tipo cadena' })
    @MaxLength(50, { message: 'el campo fecha debe ser menor a 200 caracteres' })
    @MinLength(10, { message: 'El campo fecha debe ser mayor a 10 caracteres' })
    readonly fecha: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'el campo totsal venta no debe ser vacio' })
    @IsString({ message: 'El campo totsal venta debe ser de tipo cadena' })
    @MaxLength(50, { message: 'el campo totsal venta debe ser menor a 200 caracteres' })
    @MinLength(10, { message: 'El campo totsal venta debe ser mayor a 10 caracteres' })
    readonly totalVenta: string;


    
  readonly estado: boolean;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCategoria debe estar definido' })
  @IsNumber({}, { message: 'El campo idCategoria debe ser de tipo numérico' })
  readonly idCliente: number;
}


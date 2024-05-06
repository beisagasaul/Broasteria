import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, Min } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class CreateVentadetalleDto {
    @ApiProperty()
    @IsNumber({}, { message: 'El campo salario debe ser un número' })
    @Min(0, { message: 'El campo salario no debe ser negativo' })
    readonly cantidad: number;



    @ApiProperty()
    @IsNumber({}, { message: 'El campo salario debe ser un número' })
    @Min(0, { message: 'El campo salario no debe ser negativo' })
    readonly subtotal: number;


    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;


    @ApiProperty()
    @IsDefined({ message: 'El campo idVenta debe estar definido' })
    @IsNumber({}, { message: 'El campo idVenta debe ser de tipo numérico' })
    readonly idVenta: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idProducto debe estar definido' })
    @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
    readonly idProducto: number;


}

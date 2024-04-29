import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateEmpleadoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
    @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo nombres no debe ser menora 50 caracteres' })
    @MinLength(4, { message: 'El campo nombres no debe ser menor a 4 caracteres' })
    readonly nombres: string;



    @ApiProperty()
    @IsNotEmpty({ message: 'El campo apellidos no debe ser vacío' })
    @IsString({ message: 'El campo apellidos debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo apellidos no debe ser menor a 50 caracteres' })
    @MinLength(4, { message: 'El campo apellidos no debe ser mayor a 4 caracteres' })
    readonly apellidos: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo cargo no debe ser vacío' })
    @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
    @MaxLength(30, { message: 'El campo cargo no debe ser menor 30 caracteres' })
    @MinLength(4, { message: 'El campo cargo no debe ser mayor a 4 caracteres' })
    readonly cargo: string;


    @ApiProperty()
    @IsNumber({}, { message: 'El campo salario debe ser un número' })
    @Min(0, { message: 'El campo salario no debe ser negativo' })
    readonly salario: number

    @ApiProperty({ example: '2024-04-13' })
    @IsNotEmpty({ message: 'El campo fechaLanzamiento no debe ser vacío' })
    @IsDateString({}, { message: 'El campo fechaLanzamiento debe ser de tipo fecha' })
    readonly fechaContratacion: Date;
}

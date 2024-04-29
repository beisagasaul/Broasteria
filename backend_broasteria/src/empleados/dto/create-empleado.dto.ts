import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateEmpleadoDto {

    @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
    @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo nombres no debe ser menora 50 caracteres' })
    @MinLength(4, { message: 'El campo nombres no debe ser menor a 4 caracteres' })
    readonly nombres: string;




    @IsNotEmpty({ message: 'El campo apellidos no debe ser vacío' })
    @IsString({ message: 'El campo apellidos debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo apellidos no debe ser menor a 50 caracteres' })
    @MinLength(4, { message: 'El campo apellidos no debe ser mayor a 4 caracteres' })
    readonly apellidos: string;


    @IsNotEmpty({ message: 'El campo cargo no debe ser vacío' })
    @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
    @MaxLength(30, { message: 'El campo cargo no debe ser menor 30 caracteres' })
    @MinLength(4, { message: 'El campo cargo no debe ser mayor a 4 caracteres' })
    readonly cargo: string;



    @IsNumber({}, { message: 'El campo salario debe ser un número' })
    @MaxLength(13, { message: 'El campo salario no debe tener más de 13 caracteres, incluyendo los decimales' })
    @Min(0, { message: 'El campo salario no debe ser negativo' })
    readonly salario: number


    @IsNotEmpty({ message: 'El campo fecha de contratacion no debe ser vacío' })
    @IsString({ message: 'El campo fecha de contratacion debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo fecha de contratacion no debe ser menor 20 caracteres' })
    @MinLength(10, { message: 'El campo fecha de contratacion no debe ser mayor a 10 caracteres' })
    readonly fechaContratacion: string;
}

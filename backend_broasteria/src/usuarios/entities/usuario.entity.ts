import { Empleado } from "src/empleados/entities/empleado.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 12, nullable: false, name: 'nombre_usuario' })
    nombreUsuario: string;
    @Column('varchar', { length: 50, nullable: false })
    clave: string;
    @Column('varchar', { length: 50, nullable: false })
    email: string;
    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
    //un usuario puede pertenecer a un solo empleado
    @OneToOne(()=>Empleado,empleado=>empleado.usuario)
    empleados:Empleado;




}

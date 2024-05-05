import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    @Column('varchar', { length: 20, nullable: false })
    rol: string;
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
    //un usuario puede pertenecer a un solo empleado




}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 50, nullable: false })
    nombre: string;


    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
}

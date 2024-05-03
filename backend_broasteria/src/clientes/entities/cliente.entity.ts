import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{length:50,nullable:false})
    nombres:string;

    @Column('varchar',{length:50,nullable:false})
    apellidos:string;

    @Column('varchar',{length:30,nullable:false})
    direccion:string;

    @Column()
    telefono:string;

    @Column({length:50,nullable:false})
    email:string;

    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

}

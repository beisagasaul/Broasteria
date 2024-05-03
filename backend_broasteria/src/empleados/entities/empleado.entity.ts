import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('empleados')
export class Empleado {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{length:50,nullable:false})
    nombres:string;


    @Column('varchar',{length:50,nullable:false})
    apellidos:string;

    @Column('varchar',{length:30,nullable:false})
    cargo:string;

    @Column()
    salario:number;

    @Column('varchar',{length:20,nullable:false,name:'fecha_contratacion'})
    fechaContratacion:Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
   

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;


    

}

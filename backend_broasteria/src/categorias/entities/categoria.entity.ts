import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id:number;
    @Column('varchar',{length:50,nullable:false})
    nombre:string;
}

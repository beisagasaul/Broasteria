import { Cliente } from 'src/clientes/entities/cliente.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, nullable: false })
  fecha: string;

  @Column('varchar', { length: 50, nullable: false })
  totalVenta: string;

  @Column()
  estado: boolean;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  //  muchas ventas puede realizar  un cliente
  @ManyToOne(() => Cliente, cliente => cliente.ventas)
  @JoinColumn({ name: 'idCliente', referencedColumnName: 'id' })
  cliente: Cliente;
}

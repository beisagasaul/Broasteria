import { Producto } from "src/productos/entities/producto.entity";
import { Venta } from "src/ventas/entities/venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("ventadetalles")
export class Ventadetalle {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    cantidad:number;
    @Column()
    subtotal:number
    //idVenta
    //varios ventaDetalle pueden tener una venta (M a 1) 
    @ManyToOne(()=>Venta,venta=>venta.ventadetalles)
    @JoinColumn({ name: 'id_venta', referencedColumnName: 'id' })
    venta:Venta;
    


    //idProducto
    //varios detalleventa puede estar a un producto
    @ManyToOne(()=>Producto,producto=>producto.ventadetalles)
    @JoinColumn({name:'id_producto',referencedColumnName:'id'})
    producto:Producto;
}

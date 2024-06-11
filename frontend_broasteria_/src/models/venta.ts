import type { Cliente } from './cliente'

export interface Venta {
  id: number;
  totalVenta: string ;
  cliente: Cliente;
}

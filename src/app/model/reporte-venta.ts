
export class ReporteVenta {
    fecha: Date;
    numeroOrden: number;
    nombreCliente: string;
    direccion: string;
    idProducto: number;
    nombreProducto: string;
    cantidadProductos: number;
    subTotal: number;
    impuesto: number;
    totalOrden: number;

    constructor(fecha?:Date, numeroOrden?:number,nombreCliente?:string,direccion?:string,
    idProducto?:number,nombreProducto?:string,cantidadProductos?:number,subTotal?:
    number,impuesto?:number,totalOrden?:number){
      this.fecha=fecha;
      this.numeroOrden=numeroOrden;
      this.nombreCliente=nombreCliente;
      this.direccion=direccion;
      this.idProducto=idProducto;
      this.nombreProducto=nombreProducto;
      this.cantidadProductos=cantidadProductos;
      this.subTotal=subTotal;
      this.impuesto=impuesto;
      this.totalOrden=totalOrden;
    }
}

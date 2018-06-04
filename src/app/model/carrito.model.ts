export class Carrito{
    consecutivo: number;
    idCliente:number;
    idProducto:number;
    nombre:string;
    cantidad:number;
    precio:number;

    constructor(idCliente?:number,idProducto?:number,nombre?:string,cantidad?:number,precio?:number,consecutivo?:number ){
     this.consecutivo = consecutivo
     this.idCliente=idCliente;
     this.idProducto=idProducto;
     this.nombre=nombre;
     this.cantidad=cantidad;
     this.precio=precio;
    }

}

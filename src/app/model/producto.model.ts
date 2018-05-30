import {Categoria} from '../model/categoria.model'
export class Producto{
    idProducto:number;
    nombre:string;
    categoria:Categoria;
    precio:number;
    existencias:number;
    descripcion:number;
    minimoExistencias:number;

    constructor(idProducto?:number,nombre?:string,categoria?:Categoria,precio?:number,existencias?:number){
     this.idProducto=idProducto;
     this.nombre=nombre;
     this.categoria=categoria;
     this.precio=precio;
     this.existencias=existencias;
     this.descripcion=this.descripcion;
     this.minimoExistencias=this.minimoExistencias;
    }

}
import {Categoria} from '../model/categoria.model'
export class Producto{
    idProducto:number;
    nombre:string;
    categoria:Categoria;
    precio:number;
    existencias:number;
    descripcion:string;
    minimoExistencias:number;

    constructor(idProducto?:number,
                nombre?:string,
                minimoExistencias?:number,
                precio?:number,
                descripcion?:string, 
                categoria?:Categoria,
                existencias?:number
        ){
     this.idProducto=idProducto;
     this.nombre=nombre;
     this.categoria=categoria;
     this.precio=precio;
     this.existencias=existencias;
     this.descripcion=descripcion;
     this.minimoExistencias=minimoExistencias;
    }



}
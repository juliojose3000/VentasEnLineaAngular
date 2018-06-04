import {Categoria} from '../model/categoria.model'
export class Producto{
    idProducto:number;
    nombre:string;
    categoria:string;
    precio:number;
    existencias:number;
    descripcion:string;
    minExistencias:number;

    constructor(idProducto?:number,nombre?:string,categoria?:string,precio?:number,existencias?:number,descripcion?:string, minExistencias?: number){
     this.idProducto=idProducto;
     this.nombre=nombre;
     this.categoria=categoria;
     this.precio=precio;
     this.existencias=existencias;
     this.descripcion=descripcion;
     this.minExistencias=minExistencias;
    }



}
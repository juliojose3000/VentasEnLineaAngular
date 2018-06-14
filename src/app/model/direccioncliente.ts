import { Cliente } from "./cliente";

export class DireccionCliente{
    direccion1:string;
    direccion2:string;
    pais:string;
    provincia:string;
    canton:string;
    codigoPostal:number;
    

    constructor(direccion1?:string,direccion2?:string,pais?:string,provincia?:string,canton?:string,codigoPostal?:number
   ){
      this.direccion1=direccion1;
      this.direccion2=direccion2;
      this.pais=pais;
      this.provincia=provincia;
      this.canton=canton;
      this.codigoPostal=codigoPostal;
     
    }
}
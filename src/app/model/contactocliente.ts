import { Cliente } from "./cliente";

export class ContactoCliente{
    informacionContacto:number;
telefono1:string;
telefono2:string;
   

constructor(informacionContacto?:number,telefono1?:string,telefono2?:string){
   this.informacionContacto=informacionContacto;
    this.telefono1=telefono1;
    this.telefono2=telefono2;
    
}
}
import { Cliente } from "./cliente";

export class ContactoCliente{
telefono1:string;
telefono2:string;
cliente:Cliente;    

constructor(telefono1?:string,telefono2?:string,cliente?:Cliente){
    this.telefono1=telefono1;
    this.telefono2=telefono2;
    this.cliente=cliente;
}
}
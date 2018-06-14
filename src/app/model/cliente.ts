import { DireccionCliente } from "./direccioncliente";
import { ContactoCliente } from "./contactocliente";

export class Cliente{
    idCliente:number;
    nombre:string;
    apellidos:string;
    correo:string;
    password:string;
    direccion:DireccionCliente=new DireccionCliente();
    contactoCliente:ContactoCliente=new ContactoCliente();
    constructor(idCliente?:number,nombre?:string,apellidos?:string,correo?:string,password?:string,
    direccion?:DireccionCliente,contactoCliente?:ContactoCliente){
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.correo=correo;
        this.password=password;
        this.direccion=direccion;
        this.contactoCliente=contactoCliente;

    }

}
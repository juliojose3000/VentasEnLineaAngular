import {Rol} from '../model/rol.model';

export class Encargado{
    id:number;
    dni:string;
    nombre:string;
    apellidos:string;
    correo:string;
    password:string;
    rol:Rol;

    constructor(id?:number,dni?:string,nombre?:string,apellidos?:string,correo?:string,password?:string,rol?:Rol){
        this.id=id;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.correo=correo;
        this.password=password;
        this.rol=rol;
    }

}
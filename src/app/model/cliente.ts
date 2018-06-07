export class Cliente{
    idCliente:number;
    nombre:string;
    apellidos:string;
    correo:string;
    password:string;

    constructor(idCliente?:number,nombre?:string,apellidos?:string,correo?:string,password?:string){
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.correo=correo;
        this.password=password;


    }

}
export class Ventas {
    idCliente: number;
    nombre: string;
    apellidos: string;
    total: number;

    constructor(idCliente?:number,nombre?:string,apellidos?:string,total?:number){
        this.idCliente=idCliente;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.total=total;
    }
}
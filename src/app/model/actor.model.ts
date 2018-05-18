export class Actor{
    codActor:number;
    nombreActor:string;
    apellidosActor:string;
    
    constructor(codActor?:number, nombreActor?:string, apellidosActor?:string){
        this.codActor=codActor;
        this.nombreActor=nombreActor;
        this.apellidosActor=apellidosActor;
    }
}
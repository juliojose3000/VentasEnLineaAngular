import { Genero } from "./genero.model";
import { Actor } from "./actor.model";

export class Pelicula{
    codPelicula:number;
    titulo:string;
    totalPeliculas:number;
    subtitulada:boolean;
    estreno:boolean;
    genero:Genero;
    actores:Actor[];
    constructor(codPelicula?:number, titulo?:string,totalPeliculas?:number, 
        subtitulada?:boolean, estreno?:boolean,genero?:Genero,){
            this.codPelicula=codPelicula;
            this.titulo=titulo;
            this.subtitulada=subtitulada;
            this.estreno=estreno;
            this.genero=genero;

        }
}
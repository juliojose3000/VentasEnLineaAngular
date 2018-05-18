import { Component, Inject, OnInit, ApplicationRef } from '@angular/core';
import { Pelicula } from '../model/pelicula.model';
import { PeliculaService } from '../model/pelicula.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private peliculas: Pelicula[] = new Array<Pelicula>();
  selectedProduct:string;
  titulo:string;
  nombreGenero:string;
  
  ngOnInit(): void {
  }
  constructor(private peliculaService: PeliculaService) {
       // this.peliculaService.getAll().subscribe(data => this.peliculas = data);
  }
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }
 getPeliculasByTittleAndGenre():void{
   this.peliculaService.findByTitleAndGenre(this.titulo,this.nombreGenero).subscribe(data => this.peliculas = data);
 }

  isSelected(pelicula:Pelicula):boolean{
    return pelicula.titulo == this.selectedProduct;
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../model/categoria.service';

@Component({
  selector: 'app-agregarcategoria',
  templateUrl: './agregarcategoria.component.html',
  styleUrls: ['./agregarcategoria.component.css']
})
export class AgregarcategoriaComponent implements OnInit {
  estado:boolean=false;
  ngOnInit() {
  }
  descripcion:string;

  constructor(private categoriaService:CategoriaService) { }

  onSubmit(){
    this.categoriaService.registrarCategoria(this.descripcion);
    this.estado=true;
  }
  getEstado():boolean{
    return this.estado;
  }
 

}

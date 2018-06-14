import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../model/categoria.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
@Component({
  selector: 'app-modificarcategoria',
  templateUrl: './modificarcategoria.component.html',
  styleUrls: ['./modificarcategoria.component.css']
})
export class ModificarcategoriaComponent implements OnInit {
  
  private descripcion:string;
  private categoriaActual:Categoria[]=new Array<Categoria>();
  private selectedProduct:number;
  estado:boolean=false;
  ngOnInit() {
  }
  constructor(private categoriaService:CategoriaService,private router:Router) {
    this.selectedProduct=this.categoriaService.getIDCategoriaActual();
  
  
   }


  onSubmit():void{
    var categoriaAux:Categoria=new Categoria(this.selectedProduct,this.descripcion);
    this.categoriaService.actualizar(this.selectedProduct,categoriaAux);
    this.estado=true;
  }
  getEstado():boolean{
    return this.estado;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../model/categoria.service';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-mantenimientocategoria',
  templateUrl: './mantenimientocategoria.component.html',
  styleUrls: ['./mantenimientocategoria.component.css']
})
export class MantenimientocategoriaComponent implements OnInit {
  ngOnInit() {
  }
 idCategoria:number;
 nombre:string;
 selectedProduct:number;
 private categorias:Categoria[]=new Array<Categoria>();

  constructor(private router:Router, private categoriaService:CategoriaService) { 
    this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data );
  }


  getAll():Categoria[]{
   
    return this.categorias;
    }

    modificarDatos(idCategoria:number):void{
      this.categoriaService.setIDCategoriaActual(idCategoria);
      this.router.navigate(['/modificarCategoria']);
    }
  
    suprimirDatos(idCategoria:number):void{
      console.log('entra a borrar '+idCategoria);
      this.categoriaService.suprimir(idCategoria).subscribe(data => this.categorias=data );
      this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data );
   }
   refrescarLista(){
    this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data );
  }

  

 

}

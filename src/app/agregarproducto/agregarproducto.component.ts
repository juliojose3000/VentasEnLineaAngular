import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../model/producto.service';
import { Router } from "@angular/router";
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../model/categoria.service';  
import {Observer} from 'rxjs/Observer';
import { Producto } from '../model/producto.model';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.css']
})
export class AgregarproductoComponent implements OnInit {
  private nombre: string;
  private categoria: string;
  private precio: number;
  private existencias: number;
  private descripcion: string;
  private minExistencias: number;
  private categorias:Categoria[]=new Array<Categoria>();
  private categoriaActual:Categoria;
  estado:boolean=false;

  ngOnInit() {

  }

  constructor(private productoService: ProductoService,private categoriaService:CategoriaService, private router: Router) {
    this.categoriaService.getAllCategorias().subscribe(data =>this.categorias=data);
    
  }

 private getCategoria(descripcion:string):Categoria{  
    for (let entry of this.categorias){
      if(entry.descripcion==descripcion){
        return entry;
      }
    }
    return undefined;
  }


  onSubmit(): void {
    this.categoriaActual=this.getCategoria(this.categoria);
    console.log(this.categoriaActual.idCategoria+this.categoriaActual.descripcion);
   var producto= new Producto(0,this.nombre,this.minExistencias,this.precio,this.descripcion,this.categoriaActual,
    this.existencias);
    this.productoService.agregar(producto);
    this.estado=true;

  }

  getAll():Categoria[]{
   return this.categorias;
  }
  getEstado():boolean{
    return this.estado;
  }


}

import { Component, OnInit } from '@angular/core';
import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CategoriaService } from '../model/categoria.service';
import { Producto } from '../model/producto.model';
import { Categoria } from '../model/categoria.model';
import { ProductoService } from '../model/producto.service';
@Component({
  selector: 'app-mostrar-categoria-productos',
  templateUrl: './mostrar-categoria-productos.component.html',
  styleUrls: ['./mostrar-categoria-productos.component.css']
})
export class MostrarCategoriaProductosComponent implements OnInit {
  private productos:Producto[]=new Array<Producto>();
  private selectedProduct: number;
  private categorias:Categoria[]=new Array<Categoria>();
  private estado:boolean=false;
  ngOnInit() {
  }
  constructor(private http: Http,private categoriaService:CategoriaService,private productoService:ProductoService) {
    this.categoriaService.getProductosCategoria().subscribe(data => this.productos=data);
    this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data );
  }

  getAll():Producto[]{
    return this.productos;
   }
   getAllCategorias():Categoria[]{
    return this.categorias;
  }

  addToCar(): void{
    if (confirm("Seguro que deseas realizar la compra?")) {
    this.productoService.agregarAlCarrito(this.selectedProduct);
     this.estado=true;
    }
  }
  getEstado():Boolean{
    return this.estado;
  }

}

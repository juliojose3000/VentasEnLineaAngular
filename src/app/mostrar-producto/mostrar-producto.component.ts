import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../model/producto.service';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../model/categoria.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  private productos:Producto[]=new Array<Producto>();
  private categorias:Categoria[]=new Array<Categoria>();
  private idProducto: number;
  private descripcion: string;
  private selectedProduct: number;
  private quantity:number;
  private estado:boolean=false;
  nombreBusqueda:string;
  busqueda:string;
  ngOnInit() {
  }
  constructor(private productoService:ProductoService,private categoriaService:CategoriaService,private router:Router) {
    this.nombreBusqueda= productoService.getNombreCriterioBusqueda();
    console.log(this.nombreBusqueda);
    this.productoService.getProductoNombre(this.nombreBusqueda).subscribe(data => this.productos=data);
    this.categoriaService.getAllCategorias().subscribe(data=> this.categorias=data);
    console.log(this.productos.length);
   }

   onSubmit(){
    this.productoService.getProductoNombre(this.busqueda).subscribe(data => this.productos=data );
    this.productoService.setNombreCriterioBusqueda(this.busqueda);
    this.getProductosEncontrados();
    this.router.navigateByUrl('/mostrarProductos');
  }

  getAll():Producto[]{
   
   return this.productos;
  }
  getAllCategorias():Categoria[]{
    return this.categorias;
  }
  getProductosEncontrados():void{
    console.log(this.nombreBusqueda);
    //this.productoService.getProductoNombre(this.nombreBusqueda).subscribe(data => this.productos=data);
  }
  addToCar(idProducto:number): void{
    if (confirm("Seguro que deseas agregar al carrito?")) {
      this.productoService.agregarAlCarrito(idProducto, this.quantity);
      this.estado = true;
    }
  }
  getEstado():Boolean{
    return this.estado;
  }


}

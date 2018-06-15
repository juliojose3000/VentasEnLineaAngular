import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { CategoriaService } from '../model/categoria.service';
import { Http } from '@angular/http';
import { Categoria } from '../model/categoria.model';
import { ProductoService } from '../model/producto.service';

@Component({
  selector: 'app-mostrar-productos-por-precio',
  templateUrl: './mostrar-productos-por-precio.component.html',
  styleUrls: ['./mostrar-productos-por-precio.component.css']
})
export class MostrarProductosPorPrecioComponent implements OnInit {
  private productos:Producto[]=new Array<Producto>();
  private productos2:Producto[]=new Array<Producto>();
  private categorias:Categoria[]=new Array<Categoria>();
  private selectedProduct: number;
  private estado:boolean=false;
  ngOnInit() {
  }

  constructor(private http: Http,private categoriaService:CategoriaService,private  productoService:ProductoService 
   ) { 
    this.productoService.getAll().subscribe(data => this.productos2=data);
    this.categoriaService.getProductosPrecio().subscribe(data => this.productos=data);
    this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data );

  }
  getAll():Producto[]{
    return this.productos;
   }
   getAllCategorias():Categoria[]{
    return this.categorias;
  }
  getAllProductos():Producto[]{
    return this.productos2;
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

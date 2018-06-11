import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../model/producto.service';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../model/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
busqueda:string;
private productos:Producto[]=new Array<Producto>();
private categorias:Categoria[]=new Array<Categoria>();
private selectedCategoy:string;

ngOnInit() {
}
  constructor(private productoService:ProductoService,private categoriaService:CategoriaService, private router:Router) { 
   this.productoService.getTopProductos().subscribe(data => this.productos=data);
    this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data);
    
  }
  getCategoriaEscogida(categoria:string){
    this.categoriaService.setCategoriaEscogida(categoria);
    this.router.navigate(['/productosCategoria']);
  }
  
  onSubmit(){
    //this.productoService.getProductoNombre(this.busqueda).subscribe(data => this.productos=data );
    this.productoService.setNombreCriterioBusqueda(this.busqueda);
    this.router.navigate(['/mostrarProductos']);
  }

  getAll():Categoria[]{
  return this.categorias;
  }

  getTopProducts():Producto[]{
    return this.productos;
  }

}

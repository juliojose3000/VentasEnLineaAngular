import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../model/producto.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  private productos:Producto[]=new Array<Producto>();
  nombreBusqueda:string;
  ngOnInit() {
  }
  constructor(private productoService:ProductoService) {
    //this.nombreBusqueda= productoService.getNombreCriterioBusqueda();
    console.log(this.nombreBusqueda);
    //this.productoService.getProductoNombre(this.nombreBusqueda).subscribe(data => this.productos=data);
    console.log(this.productos.length);
   }

  
  getAll():Producto[]{
   
   return this.productos;
  }
  getProductosEncontrados():void{
    console.log(this.nombreBusqueda);
    //this.productoService.getProductoNombre(this.nombreBusqueda).subscribe(data => this.productos=data);
  }


}

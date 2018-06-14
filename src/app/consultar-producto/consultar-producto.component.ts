import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../model/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {
  private productos:Producto[]=new Array<Producto>();

  constructor(private productoService:ProductoService,private router:Router) { 
    this.productoService.getProductoPorIDActual().subscribe(data => this.productos=data );
  }

  ngOnInit() {
  }
  getProducto():Producto[]{
    return this.productos;
  }
}

import { Component, OnInit } from '@angular/core';
import { Carrito } from '../model/carrito.model';
import { CarritoService } from '../model/carrito.service';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {

  private productosCarrito:Carrito[]=new Array<Carrito>();

  

  ngOnInit() {
  }

  constructor(private CarritoService: CarritoService) {
    this.CarritoService.getAll().subscribe(data => this.productosCarrito=data);

  }

  getProductos():Carrito[]{
    return this.productosCarrito;
  }

}

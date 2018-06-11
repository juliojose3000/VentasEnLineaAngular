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
  private total: number = 0;
  

  ngOnInit() {
  }

  constructor(private CarritoService: CarritoService) {
    this.CarritoService.getAll().subscribe(data => this.productosCarrito=data);
    this.CarritoService.total().subscribe(data => this.total=data);

  }

  getProductos():Carrito[]{
    return this.productosCarrito;
  }

  getTotal(): number{
    return this.total
  }

  realizarCompra():void{
    var txt;
    if (confirm("Seguro que deseas realizar la compra?")) {
      this.CarritoService.realizarCompra2(1);
      alert("Su compra ha sido realizada con exito");
    } 
  }

}

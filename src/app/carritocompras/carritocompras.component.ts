import { Component, OnInit } from '@angular/core';
import { Carrito } from '../model/carrito.model';

import { ClienteService } from '../model/cliente.service';
import { Cliente } from '../model/cliente';
import { HomeComponent } from '../home/home.component';
import { CarritoService } from '../model/carrito.service';
import { ClienteLogueadoService } from '../model/clienteLogueado.service';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {

  private productosCarrito:Carrito[]=new Array<Carrito>();
  private clienteActual:Cliente[]=new Array <Cliente>();
  private total:number=0;
  private id:number=0;
  cliente:Cliente=new Cliente();

  ngOnInit() {
  }

  constructor(private CarritoService: CarritoService,private clienteService:ClienteService, 
   private clienteLogueado:ClienteLogueadoService ) {
   // this.cliente=this.clienteService.getClienteActual();
   this.clienteLogueado.getClienteLogueado().subscribe(data => this.clienteActual=data);
    console.log('Id Cliente'+this.clienteActual[0].idCliente);
    this.CarritoService.getCarritoCliente(( this.clienteActual[0].idCliente)).subscribe(data => this.productosCarrito=data);
    this.CarritoService.totalCliente( this.total).subscribe(data => this.total=data);

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

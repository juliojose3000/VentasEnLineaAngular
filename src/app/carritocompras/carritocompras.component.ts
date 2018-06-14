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
  private total: number = 0;
  private idCliente:number=0;
  cliente:Cliente=new Cliente();

  ngOnInit() {
  }

  constructor(private CarritoService: CarritoService,private clienteService:ClienteService, 
    ) {
   // this.cliente=this.clienteService.getClienteActual();
    this.idCliente= this.CarritoService.getIdCliente();
    console.log('Id Cliente'+this.idCliente);
    //this.CarritoService.getCarritoCliente(( this.idCliente)).subscribe(data => this.productosCarrito=data);
    this.CarritoService.getCarritoCliente(( 1)).subscribe(data => this.productosCarrito=data);
    //this.CarritoService.totalCliente( this.idCliente).subscribe(data => this.total=data);
    this.CarritoService.totalCliente(1).subscribe(data => this.total=data);

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

import { Component, OnInit } from '@angular/core';
import { Carrito } from '../model/carrito.model';

import { ClienteService } from '../model/cliente.service';
import { Cliente } from '../model/cliente';
import { HomeComponent } from '../home/home.component';
import { CarritoService } from '../model/carrito.service';
import { ClienteLogueadoService } from '../model/clienteLogueado.service';
import { Router } from '@angular/router';
import { ClienteLogueado } from '../model/clienteLogueado';
import { ReporteVentaService } from '../model/reporte-venta.service';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {

  private productosCarrito: Carrito[] = new Array<Carrito>();
  private total: number=0;

  private estado: boolean = false;
  cliente: Cliente = new Cliente();
  private idCliente: number=0;
  private clienteActual: ClienteLogueado[] = new Array<ClienteLogueado>();
  ngOnInit() {
  
 
  }

  constructor(private CarritoService: CarritoService, private clienteService: ClienteService,
    private router: Router, private clienteLogueado: ClienteLogueadoService,
    private reporteService:ReporteVentaService) {
          this.clienteLogueado.getClienteLogueado().subscribe(data => {this.clienteActual = data,
      this.idCliente=this.clienteActual[0].idCliente,
      this.CarritoService.getCarritoCliente(this.idCliente).subscribe(data => this.productosCarrito = data),
      this.CarritoService.totalCliente(this.idCliente).subscribe(data => this.total = data)});
   
    
  }

  getProductos(): Carrito[] {
    console.log('Valor '+this.idCliente);
    return this.productosCarrito;
    
  }


  getTotal(): number {
   
    return this.total
  }

  realizarCompra(): void {
    var txt;
    if (confirm("Seguro que deseas realizar la compra?")) {
      this.CarritoService.realizarCompra2(this.idCliente);
      this.estado = true;
      this.reporteService.generarReporte(this.idCliente);
      alert('Compra realizada con exito');
      this.router.navigate(['/detallesCompra']);
    }
  }
  getEstado(): boolean {
    return this.estado;
  }
  deleteProducto(idProducto: number): void {
    var txt;
    if (confirm("Seguro que deseas borrar el producto?")) {
      console.log(this.idCliente,idProducto);
      this.CarritoService.deleteProducto(this.idCliente, idProducto);
      this.refreshCustomersList();
      //location.reload(false);
    }
  }
  refreshCustomersList(){
    this.clienteLogueado.getClienteLogueado().subscribe(data => {
    this.clienteActual = data,
    this.idCliente = this.clienteActual[0].idCliente,
    this.CarritoService.getCarritoCliente(this.idCliente).subscribe(data => this.productosCarrito = data),
    this.CarritoService.totalCliente(this.idCliente).subscribe(data => this.total = data)
    });
    }
  }
  



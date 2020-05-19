import { Component, OnInit } from '@angular/core';
import { ReporteVenta } from '../model/reporte-venta';
import { ReporteVentaService } from '../model/reporte-venta.service';
import { ClienteLogueado } from '../model/clienteLogueado';
import { ClienteLogueadoService } from '../model/clienteLogueado.service';
import { CarritoService } from '../model/carrito.service';

@Component({
  selector: 'app-detalles-compra',
  templateUrl: './detalles-compra.component.html',
  styleUrls: ['./detalles-compra.component.css']
})
export class DetallesCompraComponent implements OnInit {
  private clienteActual: ClienteLogueado[] = new Array<ClienteLogueado>();
  private reporteActual:ReporteVenta[]=new Array<ReporteVenta>();
  private idCliente:number=0;
  ngOnInit() {
    
 
  }
 
  constructor(private clienteLogueado:ClienteLogueadoService,private reporteService:ReporteVentaService) {
    
    this.clienteLogueado.getClienteLogueado().subscribe(data => {this.clienteActual = data,
      this.idCliente=this.clienteActual[0].idCliente,
      console.log(this.idCliente), 
      this.reporteService.getReporte(this.idCliente).subscribe(data =>this.reporteActual=data)});
   }
   

   getAll():ReporteVenta[]{
    
     console.log(this.reporteActual.length);
    // this.clienteLogueado.suprimir(this.clienteActual[0].idCliente);
     return this.reporteActual;
   }


}

import { Component, OnInit } from '@angular/core';
import { ReporteVentaService } from '../model/reporte-venta.service';
import { Ventas } from '../model/ventas';

@Component({
  selector: 'app-reporte-total-ventas',
  templateUrl: './reporte-total-ventas.component.html',
  styleUrls: ['./reporte-total-ventas.component.css']
})
export class ReporteTotalVentasComponent implements OnInit {
  private ventasTop:Ventas[]=new Array <Ventas>();
  constructor(private reporteVentaService:ReporteVentaService) 
  { 
    this.reporteVentaService.getReporteTotalVentas().subscribe(data =>this.ventasTop=data);
  }

  ngOnInit() {
  }

}

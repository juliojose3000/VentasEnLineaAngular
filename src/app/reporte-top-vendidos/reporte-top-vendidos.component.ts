import { Component, OnInit } from '@angular/core';
import { ReporteVentaService } from '../model/reporte-venta.service';
import { CategoriasTop } from '../model/categoriasTop';

@Component({
  selector: 'app-reporte-top-vendidos',
  templateUrl: './reporte-top-vendidos.component.html',
  styleUrls: ['./reporte-top-vendidos.component.css']
})
export class ReporteTopVendidosComponent implements OnInit {
 private categoriasTop:CategoriasTop[]=new Array <CategoriasTop>();
  ngOnInit() {
  }
  constructor(private reporteVentaService:ReporteVentaService) {
    this.reporteVentaService.getReporteCategoriasTop().subscribe(data =>this.categoriasTop=data);
  }

 

}

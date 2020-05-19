import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Producto } from './producto.model';
import { Categoria } from './categoria.model';
import { ClienteLogueadoService } from './clienteLogueado.service';
import { ClienteLogueado } from './clienteLogueado';
import { ReporteVenta } from './reporte-venta';
import { CategoriasTop } from './categoriasTop';
import { Ventas } from './ventas';
@Injectable()
export class ReporteVentaService{
    private url = 'http://localhost:8082/api/ventas/reporte';
   

    constructor(private http: Http,private clienteLogueado:ClienteLogueadoService) { 
     
    }
    generarReporte(idCliente:number): Promise<ReporteVenta>{
        var clienteLogueado:ClienteLogueado=new ClienteLogueado();
        clienteLogueado.idCliente=idCliente;
        let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.url + '/', clienteLogueado, options).toPromise().then(this.extractData);
       }
       getReporte(idCliente:number):Observable<ReporteVenta[]>{
           console.log(this.url+'/'+idCliente);
        return this.http.get(this.url+'/'+idCliente).map(response => response.json());
      }

      getReporteCategoriasTop():Observable <CategoriasTop[]>{
          return this.http.get(this.url+'/').map(response => response.json());
      }
      getReporteTotalVentas():Observable <Ventas[]>{
          return this.http.get(this.url+'/totalVentas').map(response => response.json());
      }

      private extractData(res: Response) {
        let body = res.json();
        return body || {};
      }
}
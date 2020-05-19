import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Categoria } from './categoria.model';
import { Carrito } from './carrito.model';
import { ClienteLogueado } from './clienteLogueado';
import { ReporteVenta } from './reporte-venta';
@Injectable()
export class CarritoService {
  private url = 'http://localhost:8082/api/ventas/carrito';
  idCliente:number;
  constructor(private http: Http) { }//variable de la clase


  getCarritoCliente(idCliente:number): Observable<Carrito[]> {
    return this.http.get(this.url + '/'+idCliente).map(response => response.json());
  }

  totalCliente(idCliente:number): Observable<number>{
    return this.http.get(this.url + '/total/'+idCliente).map(response => response.json());
  }

  realizarCompra(): Observable<Response>{
    alert("a borrar");
    return this.http.delete(this.url + '/1');
  }

  setIdCliente(idCliente:number):void{
    this.idCliente=idCliente;
 //   console.log(this.idCliente);
  }
  getIdCliente():number{
    console.log('Get'+ this.idCliente);
    return this.idCliente;
  }

  /*realizarCompra2(idCliente: number): Observable<Carrito[]> {
    alert(this.url + '/' + idCliente);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.url + '/' + idCliente, { headers: headers }).map(response => response.json())

  }*/

  realizarCompra2(idCliente: number): Promise<Carrito> {
    alert(this.url + '/' + idCliente);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.url + '/' + idCliente, { headers: headers }).toPromise().then(this.extractData);
    
    
    }
    deleteProducto(idCliente: number, idProducto: number): Promise<Carrito> {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete(this.url + '/' + idCliente + '/' +idProducto, { headers: headers }).toPromise().then(this.extractData);
    }
  

   
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}

import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Categoria } from './categoria.model';
import { Carrito } from './carrito.model';
@Injectable()
export class CarritoService {
  private url = 'http://localhost:8082/api/ventas/carrito';

  constructor(private http: Http) { }//variable de la clase


  getAll(): Observable<Carrito[]> {
      console.log( (this.url + '/'))
    return this.http.get(this.url + '/').map(response => response.json());
  }

  /*suprimir(idProducto: number): Observable<Carrito[]> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.url + '/' + idProducto, { headers: headers }).map(response => response.json())

  }*/


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}

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
    return this.http.get(this.url + '/').map(response => response.json());
  }

  total(): Observable<number>{
    return this.http.get(this.url + '/total').map(response => response.json());
  }

  realizarCompra(): Observable<Response>{
    alert("a borrar");
    return this.http.delete(this.url + '/1');
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


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}

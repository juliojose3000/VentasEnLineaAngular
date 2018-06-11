import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Producto } from './producto.model';
import { Categoria } from './categoria.model';
@Injectable()
export class ProductoService {
  private url = 'http://localhost:8082/api/ventas/producto';
  private idActual: number = 0;
  private nombreProductoBusqueda: string = "";
  private productoBusqueda: Producto[] = new Array<Producto>();
  constructor(private http: Http) {
    // this.getAll().subscribe(data => this.productoBusqueda=data );
  }//variable de la clase



  getAll(): Observable<Producto[]> {
    return this.http.get(this.url + '/').map(response => response.json());
  }

  suprimir(idProducto: number): Observable<Producto[]> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.url + '/' + idProducto, { headers: headers }).map(response => response.json())

  }


  agregar(nombre: string, categoria: Categoria, precio: number, existencias: number, descripcion: string, minimoExistencias: number): Promise<Producto> {
    var producto: Producto;
    producto = new Producto(1, nombre, minimoExistencias, precio, descripcion, categoria, existencias, );
    //producto = new Producto(nombre, categoria, p recio, existencias, minimoExistencias);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + '/agregarProducto', producto, options).toPromise().then(this.extractData);

  }


  actualizar(idProducto: number, producto: Producto): Promise<Producto> {
    console.log('ENTRA A ACTUALIZAR' + idProducto + producto.nombre + producto.descripcion + producto.minimoExistencias
      + producto.precio);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    console.log(this.url + '/' + idProducto, producto);
    return this.http.put(this.url + '/' + idProducto, producto, { headers: headers }).toPromise().then(this.extractData);
  }
  getById(idProducto: number): Observable<Producto[]> {
    return this.http.get(this.url + '/' + idProducto).map(response => response.json());
  }
  /* agregar(nombre: string, categoria: string, precio: number , existencias: number, descripcion: string, minimoExistencias: number): Promise<Producto> {
     var producto: Producto;
     producto = new Producto(precio, nombre, categoria, precio, existencias, descripcion, minimoExistencias);
     //producto = new Producto(nombre, categoria, precio, existencias, minimoExistencias);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.http.post(this.url + '/agregarProducto', producto, options).toPromise().then(this.extractData);
 
   }
*/
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}

import {Injectable,Inject,OpaqueToken} from '@angular/core';
import {Http,RequestOptions,Headers,Response,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Producto } from './producto.model';
import { Categoria } from './categoria.model';
@Injectable()
export class ProductoService{
    private url='http://localhost:8082/api/ventas/producto';

    constructor(private http: Http){ }//variable de la clase

    
    getAll(): Observable<Producto[]>{
        return this.http.get(this.url+'/').map(response => response.json());
      }

      suprimir(idProducto:number):Observable<Producto[]>{
          var headers = new Headers();
          headers.append('Content-Type', 'application/json; charset=utf-8');
          return this.http.delete(this.url+'/'+idProducto, { headers: headers }) .map(response => response.json())

      }
      getById(idProducto:number):Observable<Producto[]>{
        return this.http.get(this.url+'/'+idProducto).map(response => response.json());
      }
}
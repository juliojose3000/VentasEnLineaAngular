import {Injectable,Inject,OpaqueToken} from '@angular/core';
import {Http,RequestOptions,Headers,Response,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Producto } from './producto.model';
import { Categoria } from './categoria.model';
@Injectable()
export class ProductoService{
    private url='http://localhost:8082/api/ventas/producto';
    private idActual:number=0;
    constructor(private http: Http){ }//variable de la clase

    
    getAll(): Observable<Producto[]>{
        return this.http.get(this.url+'/').map(response => response.json());
      }
      setIDProductoActual(selectProduct:number):void{
        this.idActual=selectProduct;
        
      }
      getIDProductoActual():number{
        return this.idActual;
      }
      getProductoPorIDActual():Observable<Producto[]>{
       
      return this.http.get(this.url+'/'+this.idActual).map(response =>response.json());
      } 


      suprimir(idProducto:number):Observable<Producto[]>{
          var headers = new Headers();
          this.idActual=idProducto;
          headers.append('Content-Type', 'application/json; charset=utf-8');
          return this.http.delete(this.url+'/'+idProducto, { headers: headers }) .map(response => response.json())
      }

      actualizar(idProducto:number,producto:Producto):Promise<Producto>{
        console.log('ENTRA A ACTUALIZAR'+idProducto + producto.nombre+producto.descripcion+producto.minimoExistencias
      +producto.precio);
        var headers = new Headers();
          headers.append('Content-Type', 'application/json; charset=utf-8');
          console.log(this.url+'/'+idProducto,producto);
         return this.http.put(this.url+'/'+idProducto,producto,{headers:headers}).toPromise().then(this.extractData);
      }
      getById(idProducto:number):Observable<Producto[]>{
        return this.http.get(this.url+'/'+idProducto).map(response => response.json());
      }

      private extractData(res: Response) {
        let body = res.json();
            return body || {};
        }
}
import { Categoria } from "./categoria.model";
import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Producto } from './producto.model';

@Injectable()
export class CategoriaService {
    private url = 'http://localhost:8082/api/ventas/categoria';
    private categoriaEscogida: string;
    idCategoriaActual:number;
    precio:number;
    constructor(private http: Http) {

    }

    setIDCategoriaActual(idCateogria:number):void{
    this.idCategoriaActual=idCateogria;
    }
    getIDCategoriaActual():number{
        return this.idCategoriaActual;
    }
    suprimir(idCategoria:number):Observable<Categoria[]>{
        var headers = new Headers();
        this.idCategoriaActual=idCategoria;
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.delete(this.url+'/'+idCategoria, { headers: headers }) .map(response => response.json())
    }
    registrarCategoria(descripcion:string):Promise<Categoria>{
        var categoria=new Categoria(0,descripcion);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url +'/',categoria,options).toPromise().then(this.extractData);
    }

    actualizar(idCategoria:number,categoria:Categoria):Promise<Categoria>{
     
      var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
       return this.http.put(this.url+'/'+idCategoria,categoria,{headers:headers}).toPromise().then(this.extractData);
    }
    setCategoriaEscogida(categoria: string) {
        this.categoriaEscogida = categoria;
    }
    setPrecioEscogido(precio:number){
        this.precio=precio;
    }
    getAllCategorias(): Observable<Categoria[]> {
        return this.http.get(this.url + '/').map(response => response.json());
    }

    getCategoriaByDescripcion(categoria:string):Observable<Categoria[]>{
        console.log(this.url +'/'+ categoria+'/s'+'/s');
        return this.http.get(this.url +'/'+ categoria+'/s'+'/s').map(response => response.json());
    }

    
    getProductosCategoria(): Observable<Producto[]>{
        return this.http.get(this.url + '/'+this.categoriaEscogida+'/'+'s').map(response => response.json());
    }
    getProductosPrecio(): Observable<Producto[]>{
        console.log(this.url + '/'+this.precio+'/'+'s'+'/'+'d'+'/'+'f');
        return this.http.get(this.url + '/'+'s'+'/'+this.precio+'/'+'d'+'/'+'f').map(response => response.json());
    }
     
   private extractData(res: Response) {
    let body = res.json();
        return body || {};
    }
}
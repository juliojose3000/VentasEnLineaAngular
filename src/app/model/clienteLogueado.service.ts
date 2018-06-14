import { Categoria } from "./categoria.model";
import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Producto } from './producto.model';
import { Cliente } from "./cliente";
import { ClienteLogueado } from "./clienteLogueado";

@Injectable()
export class ClienteLogueadoService {
    private url='http://localhost:8082/api/ventas/clienteLogueado';

    constructor(private http: Http){ }

    getClienteLogueado():Observable<Cliente[]>{
        return  this.http.get(this.url+'/').map(response => response.json());
    }

    registrarClienteLogueado(cliente:Cliente):Promise <Cliente>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + '/', cliente, options).toPromise().then(this.extractData);
        
    }
    suprimir(idCliente:number):Observable<ClienteLogueado[]>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.delete(this.url+'/'+idCliente, { headers: headers }) .map(response => response.json())
    }
    private extractData(res: Response) {
        let body = res.json();
            return body || {};
        }
}
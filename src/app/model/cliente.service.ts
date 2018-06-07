import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { DireccionCliente } from './direccioncliente';
import { ContactoCliente } from './contactocliente';

@Injectable()
export class ClienteService{
    private url='http://localhost:8082/api/ventas/cliente';

    constructor(private http: Http){}
    iniciarSeccion(correo:string,password:string){
        return this.http.get(this.url+'/'+correo+'/'+password).map(response =>response.json());
    }
    registrarCliente(cliente:Cliente):Promise <Cliente>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("PAso por registro");
        return this.http.post(this.url + '/', cliente, options).
        toPromise().then(this.extractData);
        
    }
    registrarDireccionCliente(direccionCliente:DireccionCliente):Promise <Cliente>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("PAso por registro");
        return this.http.post(this.url + '/text', direccionCliente, options).
        toPromise().then(this.extractData);
        
    }
    registrarContactoCliente(contactoCliente:ContactoCliente):Promise <Cliente>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("PAso por registro");
        return this.http.post(this.url + '/text'+'/text2', contactoCliente, options).
        toPromise().then(this.extractData);
        
    }
    private extractData(res: Response) {
        let body = res.json();
            return body || {};
        }
    



         /* agregar(nombre: string, categoria: string, precio: number , existencias: number, descripcion: string, minimoExistencias: number): }<Producto> {
        var producto: Producto;
        producto = new Producto(precio, nombre, categoria, precio, existencias, descripcion, minimoExistencias);
        //producto = new Producto(nombre, categoria, precio, existencias, minimoExistencias);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + '/agregarProducto', producto, options).toPromise().then(this.extractData);
    
      }
*/
}
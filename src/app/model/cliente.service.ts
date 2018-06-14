import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { DireccionCliente } from './direccioncliente';
import { ContactoCliente } from './contactocliente';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ClienteService{
    private url='http://localhost:8082/api/ventas/cliente';
     clienteActual:Cliente=new Cliente();
    
       constructor(private http: Http){
  
    }
    getAll():Observable<Cliente[]>{
        return  this.http.get(this.url+'/').map(response => response.json());
    }

    iniciarSeccion(correo:string,password:string):Observable<Cliente[]>{
        console.log('entro '+this.http.get(this.url+'/'+correo+'/'+password).map(response => response.json()));
        return this.http.get(this.url+'/'+correo+'/'+password).map(response => response.json());
    }
    getId():Observable<number>{
        return this.http.get(this.url + '/').map(response => response.json());
    }
    inicializarClienteActual(cliente:Cliente):void{
        console.log('Service '+cliente.nombre+cliente.idCliente);
        this.clienteActual=cliente;
    }
    getClienteActual():Cliente{
        console.log("Cliente actual "+ this.clienteActual.idCliente);
        return this.clienteActual;
    }
    registrarCliente(cliente:Cliente):Promise <Cliente>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("PAso por registro"+ cliente.contactoCliente.telefono1+' '+cliente.contactoCliente.telefono2);
        return this.http.post(this.url + '/', cliente, options).
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
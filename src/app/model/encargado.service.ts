import {Injectable,Inject,OpaqueToken} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Encargado } from './encargado.model';
import { Rol } from './rol.model';
@Injectable()
export class EncargadoService{
    private url='http://localhost:8082/api/ventas/encargado';

    constructor(private http: Http){ }//variable de la clase

    getAll():Observable<Encargado[]>{
        return  this.http.get(this.url+'/').map(response => response.json());
    }

    inicioSesion(correo:string,password:string):Observable<Encargado>{
        console.log("service"+ correo+" "+ password);
        return this.http.get(this.url+'/'+correo+'/'+password).map(response=> response.json());
    }
    

}
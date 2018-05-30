import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observer} from 'rxjs/Observer';
import {Encargado} from '../model/encargado.model'
import {EncargadoService} from '../model/encargado.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-log-admin',
  templateUrl: './log-admin.component.html',
  styleUrls: ['./log-admin.component.css']
})
export class LogAdminComponent implements OnInit {
private encargado =new Encargado;
private correo:string;
private password:string;
private mensaje:String;
private size:number;
private encargadoT:Encargado;
  ngOnInit() {
  }
  constructor(private encargadoService:EncargadoService,private router:Router) { 
 // this.encargado= null;
    // this.encargadoService.inicioSesion('','').subscribe(data =>this.encargado=data);
 
  }
 
  onSubmit():void{
  
    this.encargadoService.inicioSesion(this.correo,this.password).subscribe(data =>this.encargado=data);
   console.log("Lo que trae "+ this.encargado.nombre );
  
    if(this.encargado.nombre!=undefined){
      this.router.navigate(['/administrativo']);
    }
    else{
      this.mensaje= 'Datos invalidos.intente de nuevo';
     
    }
  
  }
  
}

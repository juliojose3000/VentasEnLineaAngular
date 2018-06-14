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
private encargados:Encargado[]=new Array <Encargado>();
private correo:string;
private password:string;
private mensaje:String;
private size:number;
private encargadoT:Encargado;
  ngOnInit() {
  }
  constructor(private encargadoService:EncargadoService,private router:Router) { 
 // this.encargado= null;
     this.encargadoService.getAll().subscribe(data =>this.encargados=data);
 
  }
 
  onSubmit():void{
    var encargado= new Encargado();
    encargado=this.getEncargado(this.correo,this.password);
      if(encargado!=undefined){
      this.router.navigate(['/administrativo']);
    }
    else{
      this.mensaje= 'Datos invalidos.intente de nuevo';
     
    }
  }
    getEncargado(correo:string,password:string):Encargado{
      for(let entry of this.encargados){
        //console.log('entro Ciclo '+ entry.correo+' '+correo+' Ciclo'+entry.password);
      if(entry.correo==correo && entry.password==password){
        return entry;
      }
      }
      return undefined;
    }
  
  }
  


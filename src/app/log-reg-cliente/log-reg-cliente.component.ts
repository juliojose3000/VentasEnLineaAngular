import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../model/cliente.service';
import {Router} from "@angular/router";
import { Cliente } from '../model/cliente';
import { DireccionCliente } from '../model/direccioncliente';
import { ContactoCliente } from '../model/contactocliente';


@Component({
  selector: 'app-log-reg-cliente',
  templateUrl: './log-reg-cliente.component.html',
  styleUrls: ['./log-reg-cliente.component.css']
})
export class LogRegClienteComponent implements OnInit {
  mensaje:string='';
  correo:string;
  password:string;
  cedula:number;
  nombre:string;
  apellidos:string;
  correoR:string;
  passwordR:string;
  clienteObtenido:Cliente;
  telefono1:string;
  telefono2:string;
  direccion1:string;
  direccion2:string;
  pais:string;
  provincia:string;
  canton:string;
  codigoPostal:number;
  estado:boolean=false;
  ngOnInit() {
  }
  constructor(private clienteService:ClienteService,private router:Router) { 

  }

  onSubmitLogeo(){
   this.clienteService.iniciarSeccion(this.correo,this.password).subscribe(data =>this.clienteObtenido=data);
   if(this.clienteObtenido!=undefined){
    this.router.navigate(['/home']);
   }
   else{
    this.mensaje= 'Datos invalidos.intente de nuevo';
   }

  }

  onSubmitRegistro(){
    var cliente=new Cliente(this.cedula,this.nombre,this.apellidos,this.correoR,this.passwordR);

    var direccionCliente=new DireccionCliente(this.direccion1,this.direccion2,this.pais,this.provincia,
      this.canton,this.codigoPostal,cliente);

    var contactoCliente=new ContactoCliente(this.telefono1,this.telefono2,cliente);
   
   this.clienteService.registrarCliente(cliente);
   this.clienteService.registrarContactoCliente(contactoCliente);
   this.clienteService.registrarDireccionCliente(direccionCliente);
       this.estado=true;
   //mandar un alert de Bootstrap que se ingreso con exito
    

  }
  getEstado():boolean{
    return this.estado;
  }

 

}

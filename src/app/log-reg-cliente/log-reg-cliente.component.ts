import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../model/cliente.service';
import { Router } from "@angular/router";
import { Cliente } from '../model/cliente';
import { DireccionCliente } from '../model/direccioncliente';
import { ContactoCliente } from '../model/contactocliente';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { ClienteLogueadoService } from '../model/clienteLogueado.service';
import { ClienteLogueado } from '../model/clienteLogueado';


@Component({
  selector: 'app-log-reg-cliente',
  templateUrl: './log-reg-cliente.component.html',
  styleUrls: ['./log-reg-cliente.component.css']
})
export class LogRegClienteComponent implements OnInit {
  mensaje: string = '';
  correo: string;
  password: string;
  cedula: number;
  nombre: string;
  apellidos: string;
  correoR: string;
  passwordR: string;
  private clientes: Cliente[]=new Array <Cliente>();
  private clienteActual:ClienteLogueado[]=new Array<ClienteLogueado>();
  telefono1: string;
  telefono2: string;
  direccion1: string;
  direccion2: string;
  pais: string;
  provincia: string;
  canton: string;
  codigoPostal: number;
   id:number=0;
  estado: boolean = false;
  ngOnInit() {
    //this.clienteLogueadoService.getClienteLogueado().subscribe(data  => this.clienteActual=data);
  }
  constructor(private clienteService: ClienteService, private router: Router,
    private clienteLogueadoService:ClienteLogueadoService,private clienteLogueado:ClienteLogueadoService) {
    this.clienteService.getAll().subscribe(data => this.clientes = data);
  }
  /*
  onSubmitLogeo():void {
    console.log(this.correo+' '+this.password);
    this.clienteService.iniciarSeccion(this.correo, this.password).subscribe(data => this.clienteObtenido = data);
    console.log(this.clienteObtenido[0]);
    if (this.clienteObtenido != undefined) {
      this.clienteService.inicializarClienteActual(this.correo, this.password);
      this.router.navigate(['/home']);
    }
    else {
      this.mensaje = 'Datos invalidos.intente de nuevo';
    }

  }
  */
  prueba():void{
     //this.clienteLogueadoService.suprimir(this.clienteActual[0].idCliente);
    var cliente= new Cliente();
    console.log(this.getCliente(this.correo,this.password).idCliente);
    cliente=this.getCliente(this.correo,this.password);
    if(cliente!=undefined){
      this.clienteLogueadoService.registrarClienteLogueado(cliente);
      this.router.navigate(['/home']);
    }
    else{
      this.mensaje="Datos invalidos intente de nuevo";
    }
  }
  prueba2():Cliente[]{
    return this.clientes;
  }
  getCliente(correo:string,password:string):Cliente{
    for(let entry of this.clientes){
      //console.log('entro Ciclo '+ entry.correo+' '+correo+' Ciclo'+entry.password);
    if(entry.correo==correo && entry.password==password){
      return entry;
    }
    }
    return undefined;
  }

  onSubmitRegistro() {

    var direccionCliente = new DireccionCliente(this.direccion1, this.direccion2, this.pais, this.provincia,
      this.canton, this.codigoPostal);

    var contactoCliente = new ContactoCliente(0,this.telefono1, this.telefono2);

    var cliente = new Cliente(this.cedula, this.nombre, this.apellidos, this.correoR, this.passwordR
      , direccionCliente, contactoCliente);
      console.log(cliente.contactoCliente.telefono1+' '+cliente.contactoCliente.telefono2);
    this.clienteService.registrarCliente(cliente);

    this.estado = true;

  }
  getEstado(): boolean {
    return this.estado;
  }



}

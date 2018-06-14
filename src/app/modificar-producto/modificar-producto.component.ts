import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../model/producto.service'
import {Producto} from '../model/producto.model'
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

 
@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
private selectedProduct:number;
private categoriaActual:string;
private precio:number;
private minimoExistencias:number;
private descripcion:string;
private nombre:string;
private productoAux:Producto;
private estado:boolean=false;


private productoActual:Producto[]=new Array<Producto>();
  constructor(private productoService:ProductoService,private router:Router) {
    this.selectedProduct=this.productoService.getIDProductoActual();
  this.productoService.getProductoPorIDActual().subscribe(data =>this.productoActual=data);
  }

  ngOnInit() {
   
  }
  onSubmit(){
    this.categoriaActual=this.productoActual[0].categoria.descripcion;
    this.productoAux=new Producto(0,this.nombre,this.minimoExistencias,this.precio,this.descripcion);
   console.log("Selected product "+ this.selectedProduct);
    this.productoService.actualizar(this.selectedProduct,this.productoAux);
    this.estado=true;
  }
  getEstado():boolean{
    return this.estado;
  }

}

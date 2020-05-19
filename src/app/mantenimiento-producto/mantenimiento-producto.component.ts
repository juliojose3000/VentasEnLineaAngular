import { Component, OnInit } from '@angular/core';
import {Observer} from 'rxjs/Observer';
import {ProductoService} from '../model/producto.service'
import {Producto} from '../model/producto.model'
import {Router} from "@angular/router";

@Component({
  selector: 'app-mantenimiento-producto',
  templateUrl: './mantenimiento-producto.component.html',
  styleUrls: ['./mantenimiento-producto.component.css']
})
export class MantenimientoProductoComponent implements OnInit {
private productos:Producto[]=new Array<Producto>();
idProducto:number;
nombre:string;
categoria:string;
selectedProduct:number;
private estado:boolean=false;
ngOnInit() {
}

  constructor(private productoService:ProductoService,private router:Router) { 
 this.productoService.getAll().subscribe(data => this.productos=data );
  }

  getAll():Producto[]{
   
  return this.productos;
  }
  modificarDatos(idProducto:number):void{
    this.productoService.setIDProductoActual(idProducto);
   // console.log(this.idProducto+" "+this.nombre+" "+this.categoria+" "+this.selectedProduct)
    this.router.navigate(['/modificarProducto']);
  }

  suprimirDatos(idProducto:number):void{
  
    this.productoService.suprimir(idProducto).subscribe(data => this.productos=data );
    this.productoService.getAll().subscribe(data => this.productos=data );
  
 }
 consultarDatos(idProducto:number):void{
   console.log(idProducto);
   this.productoService.setIDProductoActual(idProducto);
   this.router.navigate(['/consultarProducto']);
 }
 getEstado():boolean{
  console.log('Entra '+ this.estado);
  return this.estado;
}

}

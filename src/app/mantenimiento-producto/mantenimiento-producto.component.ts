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
ngOnInit() {
}

  constructor(private productoService:ProductoService,private router:Router) { 
 this.productoService.getAll().subscribe(data => this.productos=data );
  }

  getAll():Producto[]{
   
  return this.productos;
  }
  modificarDatos():void{
    this.productoService.setIDProductoActual(this.selectedProduct);
    console.log(this.idProducto+" "+this.nombre+" "+this.categoria+" "+this.selectedProduct)
    this.router.navigate(['/modificarProducto']);
  }

  suprimirDatos():void{
    console.log('entra a borrar '+this.selectedProduct);
    this.productoService.suprimir(this.selectedProduct).subscribe(data => this.productos=data );
    this.router.navigate(['/mantenimientoProducto']);
 }
 consultarDatos():void{
   this.productoService.setIDProductoActual(this.selectedProduct);
   this.router.navigate(['/consultarProducto']);
 }

}

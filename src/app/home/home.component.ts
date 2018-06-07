import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../model/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
busqueda:string;
private productos:Producto[]=new Array<Producto>();
ngOnInit() {
}
  constructor(private productoService:ProductoService, private router:Router) { 
  
  // this.productoService.getProductoNombre('www').subscribe(data => this.productos=data );
  }

  
  onSubmit(){
    //this.productoService.getProductoNombre(this.busqueda).subscribe(data => this.productos=data );
    this.productoService.setNombreCriterioBusqueda(this.busqueda);
    this.router.navigate(['/mostrarProductos']);
  }

}

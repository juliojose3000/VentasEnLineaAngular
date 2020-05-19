import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../model/producto.service';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../model/categoria.service';
import { ClienteService } from '../model/cliente.service';
import { Cliente } from '../model/cliente';
import { CarritoService } from '../model/carrito.service';
import { ClienteLogueado } from '../model/clienteLogueado';
import { ClienteLogueadoService } from '../model/clienteLogueado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
busqueda:string;
private productos:Producto[]=new Array<Producto>();
private categorias:Categoria[]=new Array<Categoria>();
private selectedCategoy:string;
private productos2:Producto[]=new Array<Producto>();
private clienteActual: ClienteLogueado[] = new Array<ClienteLogueado>();
private logeado:boolean=false;
idCliente:number;
ngOnInit() {
}
  constructor(private clienteService:ClienteService,private productoService:ProductoService,private categoriaService:CategoriaService,
     private router:Router,private carritoService:CarritoService, private clienteLogueado: ClienteLogueadoService) { 
      this.clienteLogueado.getClienteLogueado().subscribe(data => this.clienteActual = data);
   this.productoService.getTopProductos().subscribe(data => this.productos=data);
   this.productoService.getAll().subscribe(data => this.productos2=data);
    this.categoriaService.getAllCategorias().subscribe(data => this.categorias=data);
    
  }
  getCategoriaEscogida(categoria:string){
    this.categoriaService.setCategoriaEscogida(categoria);
    this.router.navigate(['/productosCategoria']);
  }
  getPrecioEscogido(precio:number){
    this.categoriaService.setPrecioEscogido(precio);
    this.router.navigate(['/productosPorPrecio']);
  }
  getClienteActual():Cliente{
    return this.clienteService.getClienteActual();
  }
  
  validaCliente():boolean{
    //console.log(this.clienteActual[0].idCliente);
    if (this.clienteActual[0].idCliente>0){
     console.log('entro '+ this.logeado);
     this.logeado=true;
    }
    return this.logeado;
  }
  getEstado():boolean{
    return this.logeado;
  }

  cerrarSesion():void{
    //alert('Entro a borrar');
    this.clienteLogueado.suprimir();
    this.logeado=false;
    this.router.navigate(['/home']);
  }

  
  onSubmit(){
    this.productoService.getProductoNombre(this.busqueda).subscribe(data => this.productos=data );
    this.productoService.setNombreCriterioBusqueda(this.busqueda);
    this.router.navigate(['/mostrarProductos']);
  }

  getAll():Categoria[]{
  return this.categorias;
  }

  getTopProducts():Producto[]{
    return this.productos;
  }
  
  getAllProductos():Producto[]{
    return this.productos2;
  }

}

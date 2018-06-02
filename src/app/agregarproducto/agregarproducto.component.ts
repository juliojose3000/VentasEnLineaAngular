import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../model/producto.service';
import { Router } from "@angular/router";
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.css']
})
export class AgregarproductoComponent implements OnInit {
  private nombre: string;
  private categoria: string;
  private precio: number;
  private existencias: number;
  private descripcion: string;
  private minExistencias: number;


  ngOnInit() {

  }

  constructor(private productoService: ProductoService, private router: Router) {

  }

  onSubmit(): void {
    this.productoService.agregar(this.nombre, this.categoria, this.precio , this.existencias, this.descripcion, this.minExistencias);
    //this.router.navigate(['/agregarProducto']);

  }



}

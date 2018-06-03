import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import {AppRoutingModule} from './app-routing.module';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { LogRegClienteComponent } from './log-reg-cliente/log-reg-cliente.component';
import { LogAdminComponent } from './log-admin/log-admin.component';
import { MantenimientoProductoComponent } from './mantenimiento-producto/mantenimiento-producto.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { MantenimientocategoriaComponent } from './mantenimientocategoria/mantenimientocategoria.component';
import { AgregarcategoriaComponent } from './agregarcategoria/agregarcategoria.component';
import { ClienteproductoComponent } from './clienteproducto/clienteproducto.component';


import {EncargadoService} from './model/encargado.service';
import {ProductoService} from './model/producto.service';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { CarritocomprasComponent } from './carritocompras/carritocompras.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AdministrativoComponent,
    LogRegClienteComponent,
    LogAdminComponent,
    MantenimientoProductoComponent,
    AgregarproductoComponent,
    MantenimientocategoriaComponent,
    AgregarcategoriaComponent,
    ModificarProductoComponent,
    ClienteproductoComponent,
    CarritocomprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EncargadoService,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

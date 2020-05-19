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

import {CategoriaService} from './model/categoria.service';
import {EncargadoService} from './model/encargado.service';
import {ProductoService} from './model/producto.service';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { ConsultarProductoComponent } from './consultar-producto/consultar-producto.component';
import { CarritocomprasComponent } from './carritocompras/carritocompras.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import {ClienteService} from './model/cliente.service';
import { CarritoService } from './model/carrito.service';
import {ClienteLogueadoService} from './model/clienteLogueado.service';
import { MostrarCategoriaProductosComponent } from './mostrar-categoria-productos/mostrar-categoria-productos.component';
import { ModificarcategoriaComponent } from './modificarcategoria/modificarcategoria.component';
import { DetallesCompraComponent } from './detalles-compra/detalles-compra.component';
import { MostrarProductosPorPrecioComponent } from './mostrar-productos-por-precio/mostrar-productos-por-precio.component';
import { ReporteVentaService } from './model/reporte-venta.service';
import { ReporteTopVendidosComponent } from './reporte-top-vendidos/reporte-top-vendidos.component';
import { ReporteTotalVentasComponent } from './reporte-total-ventas/reporte-total-ventas.component';

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
    ConsultarProductoComponent,
    CarritocomprasComponent,
    MostrarProductoComponent,
    MostrarCategoriaProductosComponent,
    ModificarcategoriaComponent,
    DetallesCompraComponent,
    MostrarProductosPorPrecioComponent,
    ReporteTopVendidosComponent,
    ReporteTotalVentasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EncargadoService,ProductoService,ClienteService,CarritoService,CategoriaService,
    ClienteLogueadoService,ReporteVentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

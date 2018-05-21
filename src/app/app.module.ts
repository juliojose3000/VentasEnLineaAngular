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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AdministrativoComponent,
    LogRegClienteComponent,
    LogAdminComponent,
    MantenimientoProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

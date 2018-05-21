import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AdministrativoComponent} from './administrativo/administrativo.component'
import {LogRegClienteComponent} from './log-reg-cliente/log-reg-cliente.component'
import {LogAdminComponent} from  './log-admin/log-admin.component'
import {MantenimientoProductoComponent} from './mantenimiento-producto/mantenimiento-producto.component'
const router:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'administrativo',component:AdministrativoComponent},
    {path:'logRegistroCliente',component:LogRegClienteComponent},
    {path:'about', component:AboutComponent},
    {path:'logAdmin', component:LogAdminComponent},
    {path:'mantenimientoProducto',component:MantenimientoProductoComponent}
    ];//arreglo Routes
    
    @NgModule({//decoracion
      imports:[RouterModule.forRoot(router)],
      exports:[RouterModule]
      //pone todas las rutas del arreglo en memoria
    })
    export class AppRoutingModule { }
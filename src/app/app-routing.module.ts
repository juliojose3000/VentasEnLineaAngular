import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AdministrativoComponent} from './administrativo/administrativo.component'
import {LogRegClienteComponent} from './log-reg-cliente/log-reg-cliente.component'
import {LogAdminComponent} from  './log-admin/log-admin.component'
import {MantenimientoProductoComponent} from './mantenimiento-producto/mantenimiento-producto.component'
import {AgregarproductoComponent} from './agregarproducto/agregarproducto.component'
import {MantenimientocategoriaComponent}  from './mantenimientocategoria/mantenimientocategoria.component'
import {AgregarcategoriaComponent} from './agregarcategoria/agregarcategoria.component'
import {ModificarProductoComponent} from './modificar-producto/modificar-producto.component'
import { ClienteproductoComponent } from './clienteproducto/clienteproducto.component'
import {ConsultarProductoComponent} from './consultar-producto/consultar-producto.component'

const router:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'administrativo',component:AdministrativoComponent},
    {path:'logRegistroCliente',component:LogRegClienteComponent},
    {path:'about', component:AboutComponent},
    {path:'logAdmin', component:LogAdminComponent},
    {path:'mantenimientoProducto',component:MantenimientoProductoComponent},
    {path:'agregarProducto',component:AgregarproductoComponent},
    {path:'mantenimientoCategoria',component:MantenimientocategoriaComponent},
    {path:'agregarCategoria',component:AgregarcategoriaComponent},
    {path:'modificarProducto',component:ModificarProductoComponent},
    {path:'consultarProducto',component:ConsultarProductoComponent},
    {path: 'clienteproducto',component:ClienteproductoComponent}
    ];//arreglo Routes
    
    @NgModule({//decoracion
      imports:[RouterModule.forRoot(router)],
      exports:[RouterModule]
      //pone todas las rutas del arreglo en memoria
    })
    export class AppRoutingModule { }
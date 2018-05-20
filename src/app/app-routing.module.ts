import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

const router:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about', component:AboutComponent}
    ];//arreglo Routes
    
    @NgModule({//decoracion
      imports:[RouterModule.forRoot(router)],
      exports:[RouterModule]
      //pone todas las rutas del arreglo en memoria
    })
    export class AppRoutingModule { }
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const router:Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'page-not-found', component:PageNotFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(router)],
  exports:[RouterModule]
})
export class AppRoutingModule{ }





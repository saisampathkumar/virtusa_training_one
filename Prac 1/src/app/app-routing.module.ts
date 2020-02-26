import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp6Component } from './comp6/comp6.component';
import { Comp7Component } from './comp7/comp7.component';


const routes: Routes = [
  {path : '', component: Comp1Component},
  {path : 'comp2', component: Comp2Component},
  {path : 'comp6', component: Comp6Component},
  {path : 'comp7', component: Comp7Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

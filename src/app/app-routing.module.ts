import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { BodyComponent } from './body/body.component';
import { LoggingComponent } from './logging/logging.component';


const routes: Routes = [
  /*
  {path: 'prueba1', component: Prueba1Component, outlet: 'sidebar'},
  {path: 'prueba2', component: Prueba2Component, outlet: 'sidebar'},*/
  {path: 'principal', component: BodyComponent,
  children: [
    {
      path: 'prueba1',
      component: Prueba1Component,
      outlet: 'sidebar'
    },
    {
      path: 'prueba2',
      component: Prueba2Component,
      outlet: 'sidebar'
    }
  ]},
  {path: 'ingreso', component: LoggingComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

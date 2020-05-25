import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoggingComponent } from './logging/logging.component';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { InsumosComponent } from './insumos/insumos.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { ProveedorComponent } from './proveedor/proveedor.component';


const routes: Routes = [
  {path: 'principal', component: BodyComponent,
  children: [
    {
      path: 'empleados',
      component: EmpleadosComponent,
      outlet: 'sidebar'
    },
    {
      path: 'insumos',
      component: InsumosComponent,
      outlet: 'sidebar'
    },
    {
      path: 'home',
      component: HomeComponent,
      outlet: 'sidebar'
    },
    {
      path: 'proceso',
      component: ProcesoComponent,
      outlet: 'sidebar'
    },
    {
      path: 'proveedor',
      component: ProveedorComponent,
      outlet: 'sidebar'
    }
  ]},
  {path: 'ingreso', component: LoggingComponent},
  {path: '', redirectTo: 'ingreso', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

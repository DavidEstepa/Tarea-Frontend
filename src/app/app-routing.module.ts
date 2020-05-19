import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoggingComponent } from './logging/logging.component';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RegistroComponent } from './registro/registro.component';
import { ConsultaComponent } from './consulta/consulta.component';


const routes: Routes = [
  {path: 'principal', component: BodyComponent,
  children: [
    {
      path: 'empleados',
      component: EmpleadosComponent,
      outlet: 'sidebar'
    },
    {
      path: 'registro',
      component: RegistroComponent,
      outlet: 'sidebar'
    },
    {
      path: 'home',
      component: HomeComponent,
      outlet: 'sidebar'
    },
    {
      path: 'consulta',
      component: ConsultaComponent,
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

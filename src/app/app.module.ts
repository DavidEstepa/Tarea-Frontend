import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoggingComponent } from './logging/logging.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RegistroComponent } from './registro/registro.component';
import { InsumosComponent } from './insumos/insumos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProcesoComponent } from './proceso/proceso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoggingComponent,
    HomeComponent,
    EmpleadosComponent,
    RegistroComponent,
    InsumosComponent,
    ProveedorComponent,
    ProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { components, dialogs } from '../assets/js/Components'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import { Rutas } from '../assets/js/Routes'
import { materials } from 'src/assets/js/materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxElectronModule } from 'ngx-electron';
import { MateriasService } from './services/materias.service';
import { HttpClientModule } from '@angular/common/http';


import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { InicioModule } from './Components/inicio/inicio.module';
import { AulaComponent } from './Components/aula/aula.component';
import { HorasExcedidasComponent } from './Components/dialog/horas-excedidas/horas-excedidas.component';
import { BorrarComponent } from './Components/dialog/borrar/borrar.component';
import { ProfesorOcupadoComponent } from './Components/dialog/profesor-ocupado/profesor-ocupado.component';
import { AsignarMateriaComponent } from './Components/dialog/asignar-materia/asignar-materia.component';
import { AsignarMateriaSeccionComponent } from './Components/dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { AsignarAulaComponent } from './Components/dialog/asignar-aula/asignar-aula.component';
import { UsuarioIncorrectoComponent } from './Components/dialog/usuario-incorrecto/usuario-incorrecto.component';
import { LoginComponent } from './Components/login/login.component';
import { RecoveryPasswordComponent } from './Components/recovery-password/recovery-password.component';
import { SidenavContentComponent } from './Components/sidenav-content/sidenav-content.component';


@NgModule({
  declarations: [
    InicioComponent,
    HorasExcedidasComponent,
    BorrarComponent,
    ProfesorOcupadoComponent,
    AsignarMateriaComponent,
    AsignarMateriaSeccionComponent,
    AsignarAulaComponent,
    UsuarioIncorrectoComponent,
    LoginComponent,
    AppComponent,
    SidenavContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materials,
    FormsModule,
    ReactiveFormsModule,
    NgxElectronModule,
    HttpClientModule,
    RouterModule
  
    
     
    
  ],
  providers: [MateriasService],
  entryComponents: [
    [
      HorasExcedidasComponent,
      BorrarComponent,
      ProfesorOcupadoComponent,
      AsignarMateriaComponent,
      AsignarMateriaSeccionComponent,
      AsignarAulaComponent,
      UsuarioIncorrectoComponent]
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

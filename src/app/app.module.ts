import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { components, dialogs } from '../assets/js/Components'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Rutas } from '../assets/js/Routes'
import { materials } from 'src/assets/js/materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxElectronModule } from 'ngx-electron';
import { MateriasService } from './services/materias.service';
import { HttpClientModule } from '@angular/common/http';


import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    components
  ],
  imports: [
    Rutas,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materials,
    FormsModule,
    ReactiveFormsModule,
    NgxElectronModule,
    HttpClientModule
    
     
    
  ],
  providers: [MateriasService],
  entryComponents: [
    dialogs
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

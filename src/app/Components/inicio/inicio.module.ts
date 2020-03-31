import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import { MaterialModule  } from '../../material/material.module';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatCardModule,
  MatTableModule,
  MatExpansionModule,
  MatTreeModule,
  MatStepperModule
} from '@angular/material';  
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { inicioRoutes } from './inicio.routing';
import { HorarioComponent } from '../horario/horario.component';
import { SidenavContentComponent } from '../sidenav-content/sidenav-content.component';
import { InicioComponent } from './inicio.component';
import { ProfesoresComponent } from '../profesores/profesores.component';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { MateriasComponent } from '../materias/materias.component';
import { ReloadComponent } from '../reload/reload.component';
import { SeccionesComponent } from '../secciones/secciones.component';
import { AsignarMateriaSeccionComponent } from '../dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { AsignarAulaComponent } from '../dialog/asignar-aula/asignar-aula.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { UsuarioIncorrectoComponent } from '../dialog/usuario-incorrecto/usuario-incorrecto.component';
import { RecoveryPasswordComponent } from '../recovery-password/recovery-password.component';
import { ProfesorOcupadoComponent } from '../dialog/profesor-ocupado/profesor-ocupado.component';
import { BorrarComponent } from '../dialog/borrar/borrar.component';
import { HorasExcedidasComponent } from '../dialog/horas-excedidas/horas-excedidas.component';
import { AulaComponent } from '../aula/aula.component';
import { VistaAdminComponent } from '../vista-admin/vista-admin.component';
import { CoordinadoresComponent } from '../coordinadores/coordinadores.component';
import { CarrerasComponent } from '../carreras/carreras.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inicioRoutes),
    FormsModule,

    ReactiveFormsModule,

    //MaterialModule,
    MatButtonModule,  MatTableModule ,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule  ,
    MatCheckboxModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatTreeModule,
    MatStepperModule
  
  ],
  declarations: [
    HorarioComponent,
    ProfesoresComponent,
    MateriasComponent,
    ReloadComponent,
    SeccionesComponent,
    LogoutComponent,
    VistaAdminComponent,
    CoordinadoresComponent,
    CarrerasComponent,
    UsuariosComponent,
    RecoveryPasswordComponent,
    AulaComponent
    
    
    
  ]
})

export class InicioModule {}

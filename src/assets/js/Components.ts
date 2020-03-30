import { AppComponent } from 'src/app/app.component';
import { HorarioComponent } from 'src/app/Components/horario/horario.component';
import { SidenavContentComponent } from 'src/app/Components/sidenav-content/sidenav-content.component';
import { InicioComponent } from 'src/app/Components/inicio/inicio.component';
import { ProfesoresComponent } from 'src/app/Components/profesores/profesores.component';
import { AsignarMateriaComponent } from 'src/app/Components/dialog/asignar-materia/asignar-materia.component';
import { MateriasComponent } from 'src/app/Components/materias/materias.component';
import { ReloadComponent } from 'src/app/Components/reload/reload.component';
import { SeccionesComponent } from 'src/app/Components/secciones/secciones.component';
import { AsignarMateriaSeccionComponent } from 'src/app/Components/dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { AsignarAulaComponent } from 'src/app/Components/dialog/asignar-aula/asignar-aula.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { LogoutComponent } from 'src/app/Components/logout/logout.component';
import { UsuarioIncorrectoComponent } from 'src/app/Components/dialog/usuario-incorrecto/usuario-incorrecto.component';
import { RecoveryPasswordComponent } from 'src/app/Components/recovery-password/recovery-password.component';
import { ProfesorOcupadoComponent } from 'src/app/Components/dialog/profesor-ocupado/profesor-ocupado.component';
import { BorrarComponent } from 'src/app/Components/dialog/borrar/borrar.component';
import { HorasExcedidasComponent } from 'src/app/Components/dialog/horas-excedidas/horas-excedidas.component';
import { VistaAdminComponent } from 'src/app/Components/vista-admin/vista-admin.component';

import { AulaComponent } from 'src/app/Components/aula/aula.component'
import { CoordinadoresComponent } from '../../app/Components/coordinadores/coordinadores.component';
import { CarrerasComponent } from '../../app/Components/carreras/carreras.component';
import { UsuariosComponent } from '../../app/Components/usuarios/usuarios.component';

export const components = [AppComponent,
    HorarioComponent,
    SidenavContentComponent,
    InicioComponent,
    ProfesoresComponent,
    AsignarMateriaComponent,
    MateriasComponent,
    ReloadComponent,
    SeccionesComponent,
    AsignarMateriaSeccionComponent,
    AsignarAulaComponent,
    LoginComponent,
    LogoutComponent,
    UsuarioIncorrectoComponent,
    RecoveryPasswordComponent,
    ProfesorOcupadoComponent,
    BorrarComponent,
    HorasExcedidasComponent,
    AulaComponent,
    VistaAdminComponent,
    CoordinadoresComponent,
    CarrerasComponent,
    UsuariosComponent
    
    ]

export const dialogs = [AulaComponent,HorasExcedidasComponent,BorrarComponent,ProfesorOcupadoComponent,AsignarMateriaComponent,AsignarMateriaSeccionComponent,AsignarAulaComponent,UsuarioIncorrectoComponent]
    

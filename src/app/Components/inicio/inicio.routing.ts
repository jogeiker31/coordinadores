import { Routes } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { HorarioComponent } from '../horario/horario.component';
import { ProfesoresComponent } from '../profesores/profesores.component';
import { MateriasComponent } from '../materias/materias.component';
import { ReloadComponent } from '../reload/reload.component';
import { SeccionesComponent } from '../secciones/secciones.component';
import { LogoutComponent } from '../logout/logout.component';
import { RecoveryPasswordComponent } from '../recovery-password/recovery-password.component';
import { AulaComponent } from '../aula/aula.component';
import { VistaAdminComponent } from '../vista-admin/vista-admin.component';
import { CoordinadoresComponent } from '../coordinadores/coordinadores.component';
import { CarrerasComponent } from '../carreras/carreras.component';

export const inicioRoutes: Routes = [
  { path: 'horario', component: HorarioComponent },
  {path: 'profesores',component: ProfesoresComponent},
  {path: 'materias', component:MateriasComponent},
  {path: 'reload', component: ReloadComponent},
  {path: 'secciones', component: SeccionesComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'forgotpassword', component:RecoveryPasswordComponent},
  {path:'aula',component:AulaComponent},
  {path:'vadmin',component:VistaAdminComponent},
  {path:'coordinadores',component:CoordinadoresComponent},
  {path:'carreras',component:CarrerasComponent},
  {path:'usuarios',component:UsuariosComponent}
];

 
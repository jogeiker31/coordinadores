import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from 'src/app/Components/horario/horario.component';
import { ProfesoresComponent } from 'src/app/Components/profesores/profesores.component';
import { InicioComponent } from 'src/app/Components/inicio/inicio.component';
import { MateriasComponent } from 'src/app/Components/materias/materias.component';
import { ReloadComponent } from 'src/app/Components/reload/reload.component';
import { SeccionesComponent } from 'src/app/Components/secciones/secciones.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { LogoutComponent } from 'src/app/Components/logout/logout.component';
import { RecoveryPasswordComponent } from 'src/app/Components/recovery-password/recovery-password.component';
import { AulaComponent } from 'src/app/Components/aula/aula.component'
import { VistaAdminComponent } from '../../app/Components/vista-admin/vista-admin.component';
import { CoordinadoresComponent } from '../../app/Components/coordinadores/coordinadores.component';
import { CarrerasComponent } from '../../app/Components/carreras/carreras.component';
import { UsuariosComponent } from '../../app/Components/usuarios/usuarios.component';

 const appRoutes: Routes = [
    { path: 'horario', component: HorarioComponent },
    { path: 'inicio',      component: InicioComponent },
    {path: 'profesores',component: ProfesoresComponent},
    {path: 'materias', component:MateriasComponent},
    { path: 'reload', component: ReloadComponent},
    {path: 'secciones', component: SeccionesComponent},
    {path: '', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'forgotpassword', component:RecoveryPasswordComponent},
    {path:'aula',component:AulaComponent},
    {path:'vadmin',component:VistaAdminComponent},
    {path:'coordinadores',component:CoordinadoresComponent},
    {path:'carreras',component:CarrerasComponent},
    {path:'usuarios',component:UsuariosComponent}
  ];


export const Rutas =  RouterModule.forRoot(appRoutes)


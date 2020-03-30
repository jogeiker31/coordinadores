import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material';
import { UsuarioIncorrectoComponent } from '../dialog/usuario-incorrecto/usuario-incorrecto.component';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,  
    private router:Router,
    public loginService:LoginService,
    public dialog: MatDialog,
    private usuariosService: UsuariosService
    ) { }

  loginForm = this.fb.group({
    usuario: ['',[Validators.required]],
    contra: ['',[Validators.required]]
  })

  

  ngOnInit() {
    if(this.loginService.userLog !== null){
      this.router.navigateByUrl('/inicio')
    }
    
  }

  usuarioIncorrecto(){
    const usuarioIncorrectoDialog = this.dialog.open(UsuarioIncorrectoComponent, {
      width: '350px',
      height: '130px',
    })
  }
  


  async iniciarSesion(){
   
    let info = this.loginForm.value; // guardamos el valor del formulario en la variable info
    this.usuariosService.authUsuario(info.usuario,info.contra).subscribe((user)=>{
      if( user !== null){ // si no es null entonces permite la entrada al sistema
        this.loginService.setUserLog(user) // le manda al loginService la informacion del usuario que ingreso al sistema
        this.loginService.adminuser(user)

          
        
          this.router.navigateByUrl('/inicio') // redirecciona al inicio de la app
      
       
        /////////////////////////////
       
        
      }else {
        this.usuarioIncorrecto() // si es null entonces se desplegara la ventana modal indicando el error
      }
    }) // le pedimos al servicio usuariosService que verifique si el usuario que desea ingresar al sistema existe, si no existe devuelve null
    
    

   
      
     
      

    
  }

}

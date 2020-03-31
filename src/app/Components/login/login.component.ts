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

  


  async iniciarSesion(){
   
    let info = this.loginForm.value; 
    this.usuariosService.authUsuario(info.usuario,info.contra).subscribe((resp:any)=>{
      console.log(resp)
      if( resp.ok){
        localStorage.setItem('id',resp.user._id)
        localStorage.setItem('role',resp.user.role)
        this.router.navigate(['/usuarios']) 
      }else {
        const usuarioIncorrectoDialog = this.dialog.open(UsuarioIncorrectoComponent, {
          width: '350px',
          height: '130px',
        })
      }
    }) 
    
    

   
      
     
      

    
  }

}

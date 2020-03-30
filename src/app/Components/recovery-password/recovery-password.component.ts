import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public usuariosService:UsuariosService,
    private router: Router
  ) { }
  ngOnInit() {
    this.respuestasCorrectas = false;
  }

  
// formulario para validar usuarios y su get
  userForm = this.fb.group({
    usuario: ['',[Validators.required],this.validateUserExist.bind(this)]
  })
  get usuario() {return this.userForm.get('usuario')}

  // formulario para verificar las  respuestas y sus getters 
  respuestasForm = this.fb.group({
    usuario : [''],
    respuesta_uno : ['',Validators.required],
    respuesta_dos : ['',Validators.required]
  })
  get respuesta_uno() {return this.respuestasForm.get('respuesta_uno')}
  get respuesta_dos() {return this.respuestasForm.get('respuesta_dos')}

  // formulario para la nueva contraseña y sus getters

  passwordForm = this.fb.group({
    usuario: [''],
    new_password : ['',[Validators.required,Validators.minLength(6)]],
    repeat_password : ['',[Validators.required,Validators.minLength(6)]]
  },{validator: this.checkPasswords })

  get new_password() {return this.passwordForm.get('new_password')}
  get repeat_password() {return this.passwordForm.get('repeat_password')}


  userPreguntas; // donde se guardan las preguntas
  respuestasCorrectas = false; // variable de control para saber si las preguntas son validas o no

  async getPreguntas(usuario){ // obtiene las preguntas del usuario a cambiar contraseña
    this.userPreguntas = await this.usuariosService.getPreguntas(usuario);
    
    
  }



  async verificarPreguntas(respuestas){ // verifica las respuestas
    respuestas.usuario = this.userPreguntas.usuario
    if(await this.usuariosService.verficarPreguntas(respuestas)){
      this.respuestasCorrectas  = true;
    }else {
      this.respuestasCorrectas = false;
    }
    
  }

 
 
  async GuardarPassword(password){
    password.usuario = await this.userPreguntas.usuario;
    this.usuariosService.cambiarPassword(password);
    this.router.navigateByUrl('/')
    
    
  }

  validateUserExist(control: AbstractControl) { // funcion asyncrona para validar que el usuario existe
    return this.usuariosService.usuarioExisteApi(control.value).pipe(map(res => {
      return res ? null : { userInvalid: true };
    }))
  }

  checkPasswords(form: FormGroup) { // funcion syncrona para verificar que las contraseñas coinciden
  let pass = form.controls.new_password.value;
  let confirmPass = form.controls.repeat_password.value;
  return pass !== confirmPass ? { 'repeatInvalid' : true } : null     
}

}

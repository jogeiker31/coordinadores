import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface User {
  usuario: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  usuarios = [{
    ci_coor:'27040372',
    nom_coor:'Jogeiker',
    ape_coor:'Lizarraga',
    usuario:'user',
    contra:'user',
    correo_coor:'jogeiker1999@gmail.com',
    pregunta_seguridad_uno:''
  },
    {
      ci_coor:'27040373',
      nom_coor:'Victor',
      ape_coor:'Briceño',
      usuario:'user2',
      contra:'user2',
      correo_coor:'victorbri@gmail.com'
    }
]

preguntas_seguridad = [
  {
    usuario:'user',
    pregunta_uno:'Deportista favorito?',
    respuesta_uno:'cristiano ronaldo',
    pregunta_dos:'persona que mas odias?',
    respuesta_dos:'yo mismo'
  }
]




userConected;

async UsuarioExiste(usuario){
  let usuarioExist = await this.usuarios.filter((user)=>{
    return user.usuario = usuario;
  })

  if (usuarioExist.length > 0){
    return true
  }else {return false}
}

usuarioExisteApi(usuario:string){
  return this.http.post<User>('http://localhost:3000/usuario',{usuario:usuario});
}

async getPreguntas(user){
  let preguntas = await this.preguntas_seguridad.filter((pregunta)=>{
    return pregunta.usuario == user;
  })
  if(preguntas.length>0){
    return preguntas[0]
  }else{
    return false
  }
  
}

async verficarPreguntas(respuestas){
    let preguntas = await this.preguntas_seguridad.filter((user)=>{
      return (user.usuario == respuestas.usuario ) && (user.respuesta_uno == respuestas.respuesta_uno) && (user.respuesta_dos == respuestas.respuesta_dos)
    })
    if (preguntas.length > 0){
      return true
    }else {
      return false
    }
}

getUsuarios(){
  return this.usuarios;
}

setUsuario(newUser){
  this.usuarios.push(newUser)
}

getUsuario(id){
  return this.usuarios.filter((usuario)=>{
    return usuario.ci_coor == id
  })[0]
}

setUserConected(id){
  this.userConected = this.getUsuario(id)
}

authUsuario(usuario,password){
  return this.http.post('http://localhost:3000/api/usuario/auth',{usuario:usuario,password:password});

}

cambiarPassword(id){

}

SetUsuario(data){
  return this.http.post('http://localhost:3000/api/usuario/create',data)
}
GetUsuarios(){
  return this.http.get('http://localhost:3000/api/usuario')
}
deleteUsuarios(data){
  return this.http.delete(`http://localhost:3000/api/usuario/${data.ci_coor}`,data)
}

}
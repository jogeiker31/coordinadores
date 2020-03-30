import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



export interface Profesor {
  ci_profesor: string,
  nom_prof: string,
  ape_prof: string,
  cor_prof:string,
  horas_est:number,
  horas_ocupadas:number
}


@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
constructor(private http:HttpClient){}

/* constructor() { }

profesores: Profesor[] = [{
  ci_profesor:'27040372',
  nom_prof:'jogeiker',
  ape_prof:'lizarraga',
  cor_prof:'jogeiker1999@gmail.com',
  horas_est:30,
  horas_ocupadas:0 
}]; */

//Tomar profesores
getProfesores(){
  return this.http.get('http://localhost:3000/api/profesor')
}
//Tomar profesor
getProfesor(id){
  return this.http.get(`http://localhost:3000/api/profesor/${id}`)
}
//Guardar profesor
setProfesor(data){
  return this.http.post(`http://localhost:3000/api/profesor/create`,data)
}

//Eliminar profesor
 deleteProfesor(codigo){
  return this.http.delete(`http://localhost:3000/api/profesor/${codigo}`)
}

//Editar profesor
editPofesor(data){
  return this.http.put(`http://localhost:3000/api/profesor/${data.ci_profesor}`,data)
}


//Esto no  lo toque
   async sumarHoraProfesor(ci){
  /*  await this.profesores.forEach((profesor)=>{
    if(profesor.ci_profesor === ci){
      profesor.horas_ocupadas = profesor.horas_ocupadas + 1;
      
    }
  }) */
 await this.getProfesor(ci).subscribe((profesor:any)=>{
  delete(profesor._id)
  delete(profesor._v)
profesor.hora_ocupadas = profesor.hora_ocupadas + 1
this.editPofesor(profesor.ci_profesor)
})


}
//Esto no  lo toque

 restarHoraProfesor(ci){
 /*   this.profesores.forEach((profesor)=>{
    if(profesor.ci_profesor === ci){
      profesor.horas_ocupadas = profesor.horas_ocupadas - 1;
    }
  }) */
  this.getProfesor(ci).subscribe((profesor:any)=>{
    delete(profesor._id)
    delete(profesor._v)
    profesor.hora_ocupadas = profesor.hora_ocupadas + 1
this.editPofesor(profesor)
  })
}

//Esto no  lo toque

profesorHorasDisponible(ci){/* 
  let profesor = await this.profesores.filter((profesor)=>{
    return profesor.ci_profesor == ci
  }) 

  if(profesor[0].horas_ocupadas >= profesor[0].horas_est){
    return false
  }else{
    return true
  } */
  this.getProfesor(ci).subscribe((profesor:any)=>{
    if(profesor.horas_ocupadas >= profesor.horas_est){
      return false
    }else{
      return true
    }
  })


}




/* //CI
async updateCi(codigo: string,value) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.ci_profesor = value
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//nombre
async updateNombre(codigo: string ,value:string) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.nom_prof = value//asegurate de que funcione
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//apellido
async updateApellido(codigo: string,value ) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.ape_prof = value
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//correo
async updateCorreo(codigo: string,value ) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.cor_prof = value
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//horas trabajo
async updateHorasT(codigo: string,value ) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.horas_est = parseInt(value)
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
 */

}

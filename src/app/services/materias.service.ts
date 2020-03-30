import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
constructor(private http:HttpClient){}


materiasPorSeccion = []

getMaterias(){
  return this.http.get('http://localhost:3000/api/materia')
}

setMateria(data){
  return this.http.post('http://localhost:3000/api/materia/create',data)
}



getMateria(id){
  return this.http.get(`http://localhost:3000/api/materia/${id}`)
}

getNombreDeMateria(codigo){
  return this.http.get(`http://localhost:3000/api/materia/name/${codigo}`)

}

setMateriaSeccion(data){
  this.materiasPorSeccion.push(data);
}

async getMateriasSeccion(seccion){
  let materias = await this.materiasPorSeccion.filter((materia)=>{
    return materia.codigo_seccion ==  seccion;
  })
  return materias
  /* let materias:any = this.getMaterias()
  let materi = await materias.filter((materia)=>{
return materia.codigo_seccion == seccion
  })
  return materi */
}

//Eliminar materia
deleteMateria(codigo){
  return this.http.delete(`http://localhost:3000/api/materia/${codigo}`)
}

editMateria(data){
  return this.http.put(`http://localhost:3000/api/materia/${data.codigo_materia}`,data)
}



// //codigo
// async updateCodigo(codigo: string,value:string) {
//   let materias2 = await this.materias.filter((materia)=>{
//     if(materia.codigo_materia == codigo){
//       materia.codigo_materia = value
//     }
    
//      return  materia
     
//    })
//    this.materias = materias2
   
// }
// //Materia
// async updateMateria(codigo: string ,value:string) {
//   let materias2 = await this.materias.filter((materia)=>{
//     if(materia.codigo_materia == codigo){
//       materia.nombre_mat = value//asegurate de que funcione
//     }
    
//      return  materia
     
//    })
//    this.materias = materias2
   
// }
// //Semestre
// async updateSemestre(codigo: string,value ) {
//   let materias2 = await this.materias.filter((materia)=>{
//     if(materia.codigo_materia == codigo){
//       materia.semestre_mat = parseInt(value)
//     }
    
//      return  materia
     
//    })
//    this.materias = materias2
   
// }
// //Horas Teoricas
// async updateHorasT(codigo: string,value ) {
//   let materias2 = await this.materias.filter((materia)=>{
//     if(materia.codigo_materia == codigo){
//       materia.horas_teo = parseInt(value)
//     }
    
//      return  materia
     
//    })
//    this.materias = materias2
   
// }
// //Horas Practicas
// async updateHorasP(codigo: string,value ) {
//   let materias2 = await this.materias.filter((materia)=>{
//     if(materia.codigo_materia == codigo){
//       materia.horas_pra = parseInt(value)
//     }
    
//      return  materia
     
//    })
//    this.materias = materias2
   
// }
// //Horas Laboratorio
// async updateHorasL(codigo: string,value ) {
//   let materias2 = await this.materias.filter((materia)=>{
//     if(materia.codigo_materia == codigo){
//       materia.horas_lab = parseInt(value)
//     }
    
//      return  materia
     
//    })
//    this.materias = materias2
   
// }


}

export interface Materias {
  codigo_materia: string,
  nombre_mat: string,
  horas_teo: number,
  horas_pra:number,
  horas_lab:number,
  uc:number,
  semestre_mat:number
}







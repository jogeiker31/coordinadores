import { Injectable } from '@angular/core';

export interface Semestre {
  id_semestre: string,
  num_semestre: number,
  semestre:string
}

@Injectable({
  providedIn: 'root'
})
export class SemestresService {


  semestres: Semestre[] = [{
    id_semestre:'01S',
    num_semestre: 1,
    semestre:'PRIMERO'
  },
  {
    id_semestre:'02S',
    num_semestre: 2,
    semestre:'SEGUNDO'
  },
  {
    id_semestre:'06S',
    num_semestre: 6,
    semestre:'SEXTO'
  }]


constructor() { }

getSemestres(){
  return this.semestres
}

setSemestre(semestre){
  this.semestres.push(semestre)
  
}

getSemestre(id){
  let result = this.semestres.filter((semestre)=>{
    return semestre.id_semestre == id
  })
  if(result){
    return result[0];
  }
  
}

}

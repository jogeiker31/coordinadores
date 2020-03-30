import { Injectable } from '@angular/core';

export interface Horario {
  seccion: String;
  aula: String;
  hora: string;
  lunes: number;
  martes: number;
  miercoles: number;
  jueves: number;
  viernes: number;
  sabado: number;

}

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  horario_data: Horario[] = [];

constructor() { }


saveHour(seccionS){
  var minuts = 420;
  
  while(minuts <= 1020){
 var minuts_last = minuts + 45; 


   
  let hour = `${Math.floor(minuts/60)}:${ this.minutes(minuts) } a ${Math.floor(minuts_last/60)}:${ this.minutes(minuts_last) }`
  this.horario_data.push({hora: hour, lunes: null , martes: null, miercoles: null,jueves: null, viernes : null, sabado:null,seccion:seccionS,aula:null})

  minuts += 45;
  }
  
}

minutes(minuts){
  var seconds
  if((minuts/60 - Math.floor(minuts/60)) == 0 ){
    seconds = '00'
  }else if((minuts/60 - Math.floor(minuts/60)) == 0.25){
    seconds = '15'
  }else if((minuts/60 - Math.floor(minuts/60)) == 0.5){
    seconds = '30'
  }else if((minuts/60 - Math.floor(minuts/60)) == 0.75){
    seconds = '45'
  }

  return seconds
}


}

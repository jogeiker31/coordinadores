import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

constructor() { }

turnos = [{
  id_turno: 'D',
  turno: 'DIURNO'
}]

async getTurno(id){
  return  this.turnos.find((turno)=>{
    return turno.id_turno == id[0];
  })
}

}

import { Injectable } from '@angular/core';
import { Secciones } from '../Components/secciones/secciones.component';
import { SemestresService } from './semestres.service';
import { CarrerasService } from './carreras.service';
import { TurnoService } from './turno.service';

export interface Seccion{
  codigo_siceu:string,//r
  semestre:string,
  num_semestre:number,
  carrera:string,
  turno:string,
  aula:number,

}

@Injectable({
  providedIn: 'root'
})


export class SeccionesService {

constructor(public semestresService:SemestresService, public carrerasService:CarrerasService,public turnosService:TurnoService) { }

secciones: Seccion[] = [{
  codigo_siceu:'01S-2614-D1',
  semestre:'PRIMERO',
  num_semestre:1,
  carrera:'ING DE SISTEMAS',
  turno:'DIURNO',
  aula:null
},{
codigo_siceu:'02S-2614-D1',
  semestre:'Segundo',
  num_semestre:2,
  carrera:'ING DE SISTEMAS',
  turno:'DIURNO',
  aula:null
},
{
  codigo_siceu:'06S-2614-D1',
  semestre:'SEXTO',
  num_semestre:6,
  carrera:'ING DE SISTEMAS',
  turno:'DIURNO',
  aula:null
}

]






seccionesTree:Secciones[];

getSeccionesTree(){
  
  this.secciones.forEach((seccion)=>{

  })
}

seccionSelected = null;
treeSeccionsExpande;

async createSeccion(information){
  let info_semestre = await this.semestresService.getSemestre(information.semestre);
  let carrera_info = await this.carrerasService.getCarrera(information.carrera);
  let turno_info =  await this.turnosService.getTurno(information.turno)
  
  let new_seccion = {
    codigo_siceu: information.seccion,
    semestre: info_semestre.semestre,
    num_semestre:info_semestre.num_semestre,
    carrera: carrera_info.nombre_carrera,
    turno: turno_info.turno,
    aula: null
  }

  this.secciones.push(new_seccion)
  
}

getSecciones(){
  return this.secciones
}

setSeccion(seccion){
  this.secciones.push(seccion)
}

async getSeccion(codigo){
  let seccion =  await this.secciones.filter((seccion)=>{
    return seccion.codigo_siceu == codigo
  })
  if(seccion.length >0){this.seccionSelected = seccion[0];}
}

async setExpandidos(expandidos){
  this.treeSeccionsExpande =await  expandidos;
}

async getExpandidos(){
  return await this.treeSeccionsExpande;
}

  

}

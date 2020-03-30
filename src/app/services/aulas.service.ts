import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Aulas{
  aula:number,
  estado:string,
  ocupada:string
}

@Injectable({
  providedIn: 'root'
})

export class AulasService {

constructor(private http:HttpClient) { }

/* aulas:Aulas[] = [
  {aula:1},{aula:2},{aula:3},{aula:4},{aula:5},{aula:6},{aula:7},{aula:8},{aula:9},{aula:10},
  {aula:11},{aula:12},{aula:13},{aula:14},{aula:15},{aula:16},{aula:17},{aula:18},{aula:19},
  {aula:20},{aula:21},{aula:22},{aula:23}]; */
  
   ok=false;

   //Crear aula
   setAula(data){  
    return this.http.post('http://localhost:3000/api/aula/create',data);      
  }

  //Tomar aulas
  getAulas(){
    return this.http.get('http://localhost:3000/api/aula')
  }

  //Tomar aula
  getAula(id){
    return this.http.get(`http://localhost:3000/api/aula/${id}`)
  }

  //eliminar aula
   deleteAula(codigo){
    return this.http.delete(`http://localhost:3000/api/aula/${codigo}`)
  }

  //editar aula
   updateAula(codigo){ 
    return this.http.put(`http://localhost:3000/api/aula/${codigo.aula}`,codigo)
}


}

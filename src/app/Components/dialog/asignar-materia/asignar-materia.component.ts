import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { MateriasService } from 'src/app/services/materias.service';
import { HorarioService } from 'src/app/services/horario.service';

export interface DialogData {
  hora: object,
  dia : string,
  seccion
  
}

@Component({
  selector: 'app-asignar-materia',
  templateUrl: './asignar-materia.component.html',
  styleUrls: ['./asignar-materia.component.css']
})
export class AsignarMateriaComponent implements OnInit {


 async ngOnInit() {
  this.materiasPS = []
  this.materiasPS = await this.materiasServices.getMateriasSeccion(this.data.seccion)

  }
 
  materiasPS;
 
  materiaSelected: string;

  constructor(
    public asignarMateriaDialog: MatDialogRef<AsignarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public profesoresServices: ProfesoresService,
    public materiasServices: MateriasService,
    public horarioServices: HorarioService
    ) {}

  onNoClick(): void {
    this.asignarMateriaDialog.close();
  }

  async SaveMateria(data){
    if((await this.profesorNoOcupado(this.materiaSelected,data)) && (await this.profesorHorasDisponibles(await this.getCiProfesor(this.materiaSelected)))){ // evalua si el profesor elegido no esta ocupado en esa hora 
      // si no esta ocupado y tiene horas disponibles, se procede a guardar
      await this.profesoresServices.sumarHoraProfesor(await this.getCiProfesor(this.materiaSelected))
      switch (data.dia) {
            case 'L':
              data.hora.lunes = this.materiaSelected;
              break;
            case 'M':
              data.hora.martes = this.materiaSelected;
              break;
            case 'X':
              data.hora.miercoles = this.materiaSelected;
              break;
            case 'J':
              data.hora.jueves = this.materiaSelected;
              break;
            case 'V':
              data.hora.viernes = this.materiaSelected;
              break;
            case 'S':
              data.hora.sabado = this.materiaSelected;
              break;
            
            default:
              break;
          }
          this.asignarMateriaDialog.close('si se guardo')
    }
    
    
  }

  async getCiProfesor(id_mat){ // retorna la CI del profesor de X materia 
    let materia = []
    materia = await this.materiasPS.filter((mat)=>{ // primero hay que saber la materia que se quiere guardar, ya que en esta se encuentra la cedula del profesor 
      return mat.id_mat_sec == id_mat
    })

    let ciProfesor =await  materia[0].ci_profesor; // tenemos la cedula del profesor

    return ciProfesor
  }




  async profesorHorasDisponibles(ci){

   let profesor = await this.profesoresServices.profesorHorasDisponible(ci)

   if(true){
    return true
  }else{
    let profesor = await this.profesoresServices.getProfesor(ci)
    this.asignarMateriaDialog.close({nombre: profesor[0].nom_prof,apellido: profesor[0].ape_prof,err:'horasExcedidas'})
    return false
  }
 /*    if(await this.profesoresServices.profesorHorasDisponible(ci)){
      return true
    }else{
      let profesor = await this.profesoresServices.getProfesor(ci)
      this.asignarMateriaDialog.close({nombre: profesor[0].nom_prof,apellido: profesor[0].ape_prof,err:'horasExcedidas'})
      return false
    } */
  }




  async profesorNoOcupado(id,data){
    // para verificar si el profesor esta ocupado se realizan una serie de pasos
    

    let materiasProfesor = await this.Materias_Profesor(await this.getCiProfesor(id)) // preguntamos a esta funcion cuales son todas las materias que da este profesor
    
    if(await this.MateriaGuardada(materiasProfesor,data)){ // si una de esas materias que da X profesor , ya estan en la hora seleccionada no se podra guardar a la materia seleccionada
      let profesorInfo = this.profesoresServices.getProfesor(await this.getCiProfesor(id))
      
      this.asignarMateriaDialog.close({nombre: profesorInfo[0].nom_prof,apellido: profesorInfo[0].ape_prof,err:'profesorOcupado'});
        return false
    }else{
       return true // si no esta dando materias a esa hora, se procedera a avisarle a la funcion SaveMateria() que si la puede guardar
    }

    
   
    }



    async Materias_Profesor(ci){
      // esta funcion trae todas las materias que da el profesor X que se le asigno la materia que se desea guardar 
      let materias = []
     
      materias =  await this.materiasServices.materiasPorSeccion.filter((mat)=>{ // de las materias ya guardadas para cada seccion, me traera todas las que da el profesor ya mencionado y las gurdara en un arreglo
        return mat.ci_profesor == ci 
      })
      
      let result = []

      await materias.forEach((e)=>{ // no queremos toda la informacion de la materia, asi que solo guardaremos los id's en la variable result
        result.push(e.id_mat_sec)
      })
      
      return result // se manda el arreglo con los id's de las materias que da X profesor

    }

    


    async MateriaGuardada(ids,data){
      // esta funcion evalua si ya una de esas materias que da X profesor, esta guardada en la hora seleccionada para guardar la materia deseada
      let state = [];
      let horas = []
      horas = await this.getHoras(data.hora.hora) // esperamos la respuesta de la funcion getHoras() que nos traera todas las horas X de todas las secciones guardadas
      
    

      switch (data.dia) { // este switche se encarga de buscar la informacion que necesitamos, dependiendo del dia donde se desea guardar la materia
        // no hace falta explicar, se sobreentiende con las variables
        case 'L':{
           state = await horas.filter((hora)=>{
             return ids.includes(hora.lunes) // si en el arreglo con los id's recibidos, se encuentra el id de la materia guardada en X hora entonces la variable result, se llenara
           })
          break;
        }      
        case 'M':
          state = await horas.filter((hora)=>{
            return ids.includes(hora.martes)
          })
          break;
        case 'X':
          state = await horas.filter((hora)=>{
            return ids.includes(hora.miercoles)
          })
          break;
        case 'J':
          state = await horas.filter((hora)=>{
            return ids.includes(hora.jueves)
          })
          break;
        case 'V':
          state = await horas.filter((hora)=>{
            return ids.includes(hora.viernes)
          })
          break;
        case 'S':
          state = await horas.filter((hora)=>{
            return ids.includes(hora.sabado)
          })
          break;
        
        default:
          break;
      }
      

      if(state.length > 0){ // si state tiene informacion, quiere decir que ya hay una materia guardada en esa hora, por lo cual la funcion MateriaGuardada avisara que si existe una materia 
        return true
      }else{  
        return false // de lo contrario avisara que no hay materia guardada
      }

    }

    async getHoras(hora){
      let horas = await this.horarioServices.horario_data.filter((hor)=>{ // me trae todas las horas X de todos los horarios en la BD
        return hor.hora == hora;
      })
      return horas // los devuelve como arreglo
    }


  




    getNameOfMateria(code){
      let nombre;
      this.materiasServices.getNombreDeMateria(code).subscribe((materia:any)=>{
        nombre = materia.name
      }
        
      )
      if(nombre){
        return nombre
      }
    }

    
  getNameOfMateriaById(id){
    let materia_id = this.materiasServices.materiasPorSeccion.filter((mat_id)=>{
      return mat_id.id_mat_sec == id
    })

    if(materia_id[0]){
      let nombre = this.getNameOfMateria(materia_id[0].codigo_materia)
      return nombre;
    }
   }


 
}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { AsignarMateriaSeccionComponent } from '../dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { AsignarAulaComponent } from '../dialog/asignar-aula/asignar-aula.component';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { SeccionesService } from 'src/app/services/secciones.service';
import { MateriasService } from 'src/app/services/materias.service';
import { ProfesorOcupadoComponent } from '../dialog/profesor-ocupado/profesor-ocupado.component';
import {  Router } from '@angular/router';
import { HorarioService } from 'src/app/services/horario.service';
import { HorasExcedidasComponent } from '../dialog/horas-excedidas/horas-excedidas.component';


@Component({
  selector: 'horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    public profesoresService:ProfesoresService, 
    public seccionesService:SeccionesService,
    public materiasService:MateriasService,
    public router:Router,
    public horarioService:HorarioService) {}


  info = null;

  

    

  getNameOfMateria(code){
    let nombre;
    this.materiasService.getNombreDeMateria(code).subscribe((materia:any)=>{
      nombre = materia.name
    }
      
    )
    if(nombre){
      return nombre
    }
  }


   getNameOfMateriaById(id){
    let materia_id = this.materiasService.materiasPorSeccion.filter((materia)=>{
      return materia.id_mat_sec == id
    })

    if(materia_id[0]){
      let nombre = this.getNameOfMateria(materia_id[0].codigo_materia)
      return nombre;
    }
   }

    
   async back(){
      this.seccionesService.seccionSelected = await null;
      this.router.navigateByUrl('/secciones')
   }
  
  
  
  asignarMateria(hora,dia,materia){
    let seccion = this.info.codigo_siceu
    const asignarMateriaDialog = this.dialog.open(AsignarMateriaComponent, {
      width: '450px',
      height: '350px',
      data: {hora,dia,materia,seccion}
    });
    
    
    asignarMateriaDialog.afterClosed().subscribe((result) => {
      if(result){
        if(result.err == 'profesorOcupado'){
        const profesorOcupadoDialog = this.dialog.open(ProfesorOcupadoComponent,{
          width: '450px',
          height: '200px',
          data: result
        })
      }else if(result.err == 'horasExcedidas'){
        
        const horasExcedidasDialog = this.dialog.open(HorasExcedidasComponent,{
          width: '450px',
          height: '200px',
          data: result
        })
      
      }
      }
      


    })

  
  
  }


  openDialogMateriaSec(){

    let seccion = this.info.codigo_siceu;
    let semestre = this.info.num_semestre
    const asignarMateriaSecDialog = this.dialog.open(AsignarMateriaSeccionComponent, {
      width: '450px',
      height: '350px',
      data: {seccion,semestre}
    })
  }

  
  openDialogAulasSec(seccion){
    const asignarAulaDialog = this.dialog.open(AsignarAulaComponent, {
      width: '450px',
      height: '250',
      data: {seccion}
    })
  }

  getNameOfProfesor(code){
   let profesor = this.profesoresService.getProfesor(code);
   if(profesor[0]){
     return `${profesor[0].nom_prof} ${profesor[0].ape_prof}`
   }

  }




 
  async ngOnInit() {
    this.info = await  this.seccionesService.seccionSelected


    if( this.info == null){
      this.router.navigateByUrl('/secciones')
    }else {

      this.MateriasData = []

     this.MateriasData = await this.materiasService.getMateriasSeccion(this.info.codigo_siceu);

    
    
  


    this.HorarioData = await this.horarioService.horario_data.filter((data)=>{
      return data.seccion == this.info.codigo_siceu
    })

    if(!this.HorarioData[0]){
      await this.horarioService.saveHour(this.info.codigo_siceu)
      this.HorarioData = await this.horarioService.horario_data.filter((data)=>{
        return data.seccion == this.info.codigo_siceu
      })
    }

    }


    

    
    
  }



  columnasHorario: string[] = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
  HorarioData;
  
  
  columnasMaterias: string[] = ['id', 'materia','profesor'];
  MateriasData;
  

}

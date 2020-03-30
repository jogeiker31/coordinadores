import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { MateriasService } from 'src/app/services/materias.service';


export interface AMSDATA {
  seccion: string,
  semestre : number
  
}

export var id = 0;
@Component({
  selector: 'app-asignar-materia-seccion',
  templateUrl: './asignar-materia-seccion.component.html',
  styleUrls: ['./asignar-materia-seccion.component.css']
})
export class AsignarMateriaSeccionComponent implements OnInit {



  constructor(
    public asignarMateriaSecDialog: MatDialogRef<AsignarMateriaSeccionComponent>, // codigo angular para abrir dialogos
    
    @Inject(MAT_DIALOG_DATA) public data: AMSDATA,
    private router: Router,
    public profesoresService:ProfesoresService,
    public materiasService:MateriasService
    ) {} // codigo angular para abrir dialogos


    
  onNoClick(): void {
    // esta funcion es para que se cierre la ventana modal 

    this.asignarMateriaSecDialog.close();
  }

   
  // async getMaterias(){
  //   // Trae las materias correspondiente al semestre seleccionado
  //   this.materiasPorSemestre = await this.materiasService.materias.filter((mat)=>{
  //     return mat.semestre_mat == this.data.semestre
  //   })
  // }

  ngOnInit() {

    // this.getMaterias()
  }


  materiasPorSeccionForm = new FormGroup({
    // el formulario para que se guarde las materias por seccion
    id_mat_sec: new FormControl(''),
    codigo_materia: new FormControl('',[Validators.required]),
    ci_profesor: new FormControl('',[Validators.required]),
    codigo_seccion: new FormControl('')


  })


  

  guardarMateriaSeccion(value){
    // esto guarda las materias por seccion 
    id += 1;
    let materia = value
    materia.codigo_seccion = this.data.seccion
    materia.id_mat_sec = id
    this.materiasService.setMateriaSeccion(materia)
   
    
   this.onNoClick()

   this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/horario'])
      
    }); 

  }

  materiasPorSemestre = [] // esta es la materia que se ven en el semestre seleccionado 

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

  profesoresDisponibles = this.profesoresService.getProfesores() // los profesores registrados en la base de datos


  

}

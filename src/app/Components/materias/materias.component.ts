

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, throwToolbarMixedModesError, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service'
import { BorrarComponent } from '../dialog/borrar/borrar.component';



@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, 
    private router:Router,
    public materiasService:MateriasService,
    public dialog: MatDialog
    ) { }



 
  
  ngOnInit() {
   

    this.materiasService.getMaterias().subscribe((materias:any)=>{
      this.dataSource = new MatTableDataSource(materias);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  /* materia= materias 
  materiaselected;

  async deletem(codigo){
   
  this.materiaselected =  await this.materias.filter((seccion)=>{
    return seccion.codigo_siceu == codigo
  })
} */
  

  semestres = [
    {nombre:'Primero',numero:1},
    {nombre:'Segundo',numero:2},
    {nombre:'Tercero',numero:3},
    {nombre:'Cuarto',numero:4},
    {nombre:'Quinto',numero:5},
    {nombre:'Sexto',numero:6},
    {nombre:'Septimo',numero:7},
    {nombre:'Octavo',numero:8},
    {nombre:'Noveno',numero:9},
  ]


  displayedColumns: string[] = ['codigo', 'materia', 'horas_teo', 'horas_pra','horas_lab', 'horas_tot','boton','botonE'];
  dataSource

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  materiasForm  = new FormGroup({
    codigo_materia: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
    nombre_mat: new FormControl('',[Validators.required]),
    horas_teo: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_pra: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_lab: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required])
    
  });

  get codigo_materia() {return this.materiasForm.get('codigo_materia')}
  get nombre_mat() {return this.materiasForm.get('nombre_mat')}
  get horas_teo() {return this.materiasForm.get('horas_teo')}
  get horas_pra() {return this.materiasForm.get('horas_pra')}
  get horas_lab() {return this.materiasForm.get('horas_lab')}
 



  guardarMateria(){
    this.materiasService.setMateria(this.materiasForm.value).subscribe((materia)=>{
      this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
      {
        this.router.navigate(['/materias'])
        
      }); 

    })
    
   
    
  }

  async borrarMateria(code){
  
    const borrarDialog = this.dialog.open(BorrarComponent,{
      width: '300px',
      height: '135px'
    })

    await borrarDialog.afterClosed().subscribe((result)=>{
      if(result){
         this.materiasService.deleteMateria(code).subscribe((msg)=>{
           this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
        {
          this.router.navigate(['/materias'])
          
        }); 

         })

        
      }
    })

 
}



edit:false;//para los botones de editar, si es false no es editable
tomarcodigo:any; 


materiasE  = new FormGroup({
  codigo_materia: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
  nombre_mat: new FormControl('',[Validators.required]),
  horas_teo: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
  horas_pra: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
  horas_lab: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required])
  
});

get codigo_materiaE() {return this.materiasE.get('codigo_materia')}
get nombre_matE() {return this.materiasE.get('nombre_mat')}
get horas_teoE() {return this.materiasE.get('horas_teo')}
get horas_praE() {return this.materiasE.get('horas_pra')}
get horas_labE() {return this.materiasE.get('horas_lab')}





EditarMateria(code){
 
  this.materiasService.getMateria(code).subscribe((materia:any)=>{
    delete(materia._id)
    delete(materia.__v)
    this.materiasE.setValue(materia)
  })
}

SaveEdit(){
this.materiasService.editMateria(this.materiasE.value).subscribe((materia:any)=>{
  console.log(materia);
  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
     {
       this.router.navigate(['/materias'])
      
    }); 
})
}


}

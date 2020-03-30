import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, throwToolbarMixedModesError, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { BorrarComponent } from '../dialog/borrar/borrar.component';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router:Router, 
    public usuariosService:UsuariosService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
this.usuariosService.GetUsuarios().subscribe((usuarios:any)=>{
  this.dataSource = new MatTableDataSource(usuarios);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
})
}

displayedColumns: string[] = ['usuario', 'ci', 'nombre', 'apellido','correo', 'roll','boton'];
  dataSource

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  usuarioForm  = new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.min(8)]), 
    ci_coor: new FormControl('',[Validators.required]),
    nom_coor: new FormControl('',[Validators.required]),
    ape_coor: new FormControl('',[Validators.required]),
    correo_coor: new FormControl('',[Validators.email]),
    role:new FormControl('',[Validators.required])
    
  });

  get usuario() {return this.usuarioForm.get('usuario')}
  get password() {return this.usuarioForm.get('password')}
  get ci_coor() {return this.usuarioForm.get('ci_coor')}
  get nom_coor() {return this.usuarioForm.get('nom_coor')}
  get ape_coor() {return this.usuarioForm.get('ape_coor')}
  get correo_coor() {return this.usuarioForm.get('correo_coor')}
  get role() {return this.usuarioForm.get('role')}


  guardarUsuario(){
    this.usuariosService.SetUsuario(this.usuarioForm.value).subscribe((usuario)=>{
      this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
      {
        this.router.navigate(['/usuarios'])
        
      }); 

    })
    
  }



  async borrarUsuario(code){
  
    const borrarDialog = this.dialog.open(BorrarComponent,{
      width: '300px',
      height: '135px'
    })

    await borrarDialog.afterClosed().subscribe((result)=>{
      if(result){
         this.usuariosService.deleteUsuarios(code).subscribe((msg)=>{
           this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
        {
          this.router.navigate(['/usuarios'])
          
        }); 

         })

        
      }
    })

}


edit:false;//para los botones de editar, si es false no es editable
tomarci:any; 



usuarioFormE  = new FormGroup({
  usuario: new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.min(8)]), 
  ci_coor: new FormControl('',[Validators.required]),
  nom_coor: new FormControl('',[Validators.required]),
  ape_coor: new FormControl('',[Validators.required]),
  correo_coor: new FormControl('',[Validators.email])
  
});

get usuarioE() {return this.usuarioForm.get('usuario')}
get passwordE() {return this.usuarioForm.get('password')}
get ci_coorE() {return this.usuarioForm.get('ci_coor')}
get nom_coorE() {return this.usuarioForm.get('nom_coor')}
get ape_coorE() {return this.usuarioForm.get('ape_coor')}
get correo_coorE() {return this.usuarioForm.get('correo_coor')}

//Falta el get usuario para el editar materia
//Falta el saveedit

}

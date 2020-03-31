import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

  constructor(public loginService:LoginService) { }
  links=[]
  
  ngOnInit() {
    if(localStorage.getItem('role') == "admin"){
      this.sidenavAdmin()
    }else{
      this.sidenavCoordinador()
    }
    }





sidenavAdmin(){
    this.links=[
      {url:'/usuarios',nombre:'Usuarios'},
      {url:'/carreras',nombre:'Carreras'},
      
    ]

  }

sidenavCoordinador(){
    
 this.links = [
  {url:'/horario',nombre:'Horario'},
  {url:'/profesores',nombre:'Profesores'},
  {url: '/materias',nombre:'materias'},
  {url:'/aula',nombre:'Aulas'},
  {url: '/logout',nombre:'Cerrar sesión'}
  
]
  }



 


}

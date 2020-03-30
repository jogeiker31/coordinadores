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
  admin = this.loginService.admin 
  
  ngOnInit() {
    console.log(this.admin)
    if(this.admin == true){
      this.links=[
        {url:'/usuarios',nombre:'Usuarios'},
        {url:'/carreras',nombre:'Carreras'},
        
      ]
    }else{
 this.links = [
    {url:'/horario',nombre:'Horario'},
    {url:'/profesores',nombre:'Profesores'},
    {url: '/materias',nombre:'materias'},
    {url:'/aula',nombre:'Aulas'},
    {url: '/logout',nombre:'Cerrar sesión'}
    
  ]
  

    }
  }



 


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, public loginService:LoginService) { }

  async ngOnInit() {
    await this.loginService.clearUserLog()
    this.router.navigateByUrl('/')
    
  }

}

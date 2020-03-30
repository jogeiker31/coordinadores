import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-usuario-incorrecto',
  templateUrl: './usuario-incorrecto.component.html',
  styleUrls: ['./usuario-incorrecto.component.css']
})
export class UsuarioIncorrectoComponent implements OnInit {

  constructor(public usuarioIncorrectoDialog: MatDialogRef<UsuarioIncorrectoComponent>) { }
 
  onNoClick(): void {
    // esta funcion es para que se cierre la ventana modal 

     this.usuarioIncorrectoDialog.close();
 }

  ngOnInit() {
  }

}

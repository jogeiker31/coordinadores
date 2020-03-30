import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  constructor(
    public borrarDialog: MatDialogRef<BorrarComponent>
  ) { }

    Aceptar(){
      this.borrarDialog.close(true)
    }

    Cancelar(){
      this.borrarDialog.close(false)
    }
    
  ngOnInit() {
  }

}

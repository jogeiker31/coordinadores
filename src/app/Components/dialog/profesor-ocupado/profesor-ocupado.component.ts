import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface ProfesorData {
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-profesor-ocupado',
  templateUrl: './profesor-ocupado.component.html',
  styleUrls: ['./profesor-ocupado.component.css']
})
export class ProfesorOcupadoComponent {

  constructor(
    public profesorOcupadoDialog: MatDialogRef<ProfesorOcupadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProfesorData) {}

  onNoClick(): void {
    this.profesorOcupadoDialog.close();
  }

}

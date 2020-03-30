import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfesorData } from '../profesor-ocupado/profesor-ocupado.component';


@Component({
  selector: 'app-horas-excedidas',
  templateUrl: './horas-excedidas.component.html',
  styleUrls: ['./horas-excedidas.component.css']
})
export class HorasExcedidasComponent  {

  constructor(
    public profesorOcupadoDialog: MatDialogRef<HorasExcedidasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProfesorData) {}

  onNoClick(): void {
    this.profesorOcupadoDialog.close();
  }


}

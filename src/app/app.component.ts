import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from './services/login.service';
import { ElectronService } from 'ngx-electron';
import { UsuariosService } from './services/usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
 
  private _mobileQueryListener: () => void; // codigo Materials

  constructor(
    private changeDetectorRef: ChangeDetectorRef,  // codigo Materials
    media: MediaMatcher,  // codigo Materials
    public loginService:LoginService, // servicio de login
    private _electronService:ElectronService, // Esto es para comunicarse con la API de electron desde angular 
    private usuariosService: UsuariosService
    ) { 

  
  }

async ngOnInit(){

  

}
// variables de control

maximizado = false;

Minimizar(){
  // para minimizar la ventana principal
this._electronService.ipcRenderer.send('minimizar', 'minimizar') // envia un evento main.js de electron

}

Maximizar(){
  // para maximizar  la ventana principal
  this.maximizado= false;
  this._electronService.ipcRenderer.send('maximizar', 'maximizar')
  
  this._electronService.ipcRenderer.on('maximizado',(event,args)=>{
    this.maximizado= true;
  })

}

Cerrar(){
  // para cerrar la ventana principal
  this._electronService.ipcRenderer.send('cerrar', 'cerrar')

}


zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}



}

import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { SeccionesService } from 'src/app/services/secciones.service';
import { Router } from '@angular/router';
import { type } from 'os';




/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
export interface Secciones {
  num_semestre: number
  semestre: string;
  children?;
}




/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})

export class SeccionesComponent implements OnInit {

  secciones: Secciones[] = [];

async ngOnInit(){
  await this.getSeccionesTree()
  this.dataSource.data = await this.secciones;

  this.expandir()
  
  
}

async saveExpandidos(){

  let expandibles = await this.treeControl.dataNodes.filter((node)=>{
    return node.expandable == true
  })

  let expandidos = expandibles.filter((expandible)=>{
    return this.treeControl.isExpanded(expandible)
  })

  await this.seccionesService.setExpandidos(expandidos);

}

async expandir(){
  let expandibles = await this.seccionesService.getExpandidos()
  if (expandibles){
    await expandibles.forEach((expandible) => {
    this.treeControl.dataNodes.forEach((node)=>{
      if(node.name == expandible.name){
        this.treeControl.expand(node)
      }
    })
  });
  }
  
  
}




  constructor( public seccionesService:SeccionesService, private router:Router) {
    
  }

  private _transformer = (node:Secciones, level: number) => {  // codigo materials para expandir el arbol
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.semestre,
      level: level,
      children: node.children
    };
  }


  getChildren = (node: Secciones): Secciones[] => node.children;

  treeControl = new FlatTreeControl<ExampleFlatNode>( // mas codigo materials
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, this.getChildren);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener); // codigo materials :V 

  


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



   async cargarHorario(code){
    await this.seccionesService.getSeccion(code)
    this.router.navigateByUrl('/horario')
  }

semestreExist(semestre){
    if(this.secciones.find((seccion)=>{return seccion.num_semestre == semestre})){
      return true
    }else 
    {
      return false
    }
  }

  async getSeccionesTree(){
    await this.seccionesService.getSecciones().forEach((seccion)=>{
      if(this.semestreExist(seccion.num_semestre)){
        this.secciones.forEach((seccionTree) => {
          if(seccionTree.num_semestre == seccion.num_semestre){
            seccionTree.children.push({semestre:seccion.codigo_siceu})
          }
        });
      }else {
        this.secciones.push({
        num_semestre: seccion.num_semestre,
        semestre: seccion.semestre,
        children: [{semestre: seccion.codigo_siceu}]
      })
      }
      
    })
    
  }

  async nuevaSeccion(node){
    
    let seccion = node.children[node.children.length -1 ].semestre
    let info_seccion = seccion.split("-")
    let informacion = {
      semestre:info_seccion[0],
      carrera:info_seccion[1],
      turno:info_seccion[2],
      seccion: await this.generateNewSeccionCode(seccion)
    }
    await this.seccionesService.createSeccion(informacion)
    await this.saveExpandidos()
    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/secciones'])
      
    }); 
  }

  async generateNewSeccionCode(seccion){
    let new_seccion = await seccion.split("");
    new_seccion[new_seccion.length -1] = await parseInt(new_seccion[new_seccion.length -1]) + 1;
    return new_seccion.join("")
  }
 


  
}




 

  
    
 

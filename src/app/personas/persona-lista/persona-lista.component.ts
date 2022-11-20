import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.css']
})
export class PersonaListaComponent implements OnInit {


  

  public usuarios: any=[];

  constructor( private dataSvc:DataService) { }

  ngOnInit(): void {
    this.usuarios = this.dataSvc.getPersonas();
  }

}

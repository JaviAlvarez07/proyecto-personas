import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.css']
})
export class DetallesPersonaComponent implements OnInit {

  public usuario: any = {};

  constructor (private route:ActivatedRoute, private dataSvc:DataService, private location:Location) { }

  volver () {
    this.location.back();
  }
  ngOnInit(): void {
    const personaId = this.route.snapshot.paramMap.get('id');
    [this.usuario] = this.usuario = this.dataSvc.getPersonaById(personaId);

  }

}

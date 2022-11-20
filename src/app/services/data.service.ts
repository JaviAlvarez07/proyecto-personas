import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usuarios = [
    {id: 1, nombre: 'Javier', apellido: 'Alvarez', edad: '28', cel: '', domicilio:''},
    {id:2, nombre: 'Vanessa', apellido: 'Muñoz', edad: '28', cel: '2313123123', domicilio:'El Chachingo 84'},
    ];
    

  getPersonas() {
      return this.usuarios;
      }
  getPersonaById(id: string | number | null) {
      return this.usuarios.filter(usuario => usuario.id == id);
      }
      

  constructor() { }
}

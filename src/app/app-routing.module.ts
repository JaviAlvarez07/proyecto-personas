import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { DetallesPersonaComponent } from './personas/detalles-persona/detalles-persona.component';
import { PersonaListaComponent } from './personas/persona-lista/persona-lista.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'personas', component:PersonaListaComponent},
  {path:'persona/:id', component:DetallesPersonaComponent},
  {path:'**', component:NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

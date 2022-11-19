import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { DetallesPersonaComponent } from './personas/detalles-persona/detalles-persona.component';
import { PersonaListaComponent } from './personas/persona-lista/persona-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    HomeComponent,
    NoFoundComponent,
    DetallesPersonaComponent,
    PersonaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

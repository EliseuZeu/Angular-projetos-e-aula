import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosAngularComponent } from './exemplos-angular/exemplos-angular.component';
import { FormsModule } from '@angular/forms';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosAngularComponent,
    ExemploServicos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

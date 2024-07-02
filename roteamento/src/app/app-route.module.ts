import { PrimeiroComponenteComponent } from './../../../fundamentos-angular/src/app/primeiro-componente/primeiro-componente.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component/primeira-pagina-component.component';
import { Router } from 'express';

const routes: Routes = [
  {
    path: "primeira-pagina", component: PrimeiraPaginaComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }

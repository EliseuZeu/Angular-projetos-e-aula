import { PrimeiroComponenteComponent } from './../../../fundamentos-angular/src/app/primeiro-componente/primeiro-componente.component';
import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes, CanActivateFn } from '@angular/router';
import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component/primeira-pagina-component.component';
import { Router } from 'express';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';



const routes: Routes = [
  {
    path: "primeira-pagina", component: PrimeiraPaginaComponentComponent},
    {path: "segunda-pagina", component: SegundaPaginaComponent},
    {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard]},
    {path: "", redirectTo: "primeira-pagina", pathMatch: 'full'},
    {path: "**", component: PaginaNaoEncontradaComponent},
    {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent},
  ]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }

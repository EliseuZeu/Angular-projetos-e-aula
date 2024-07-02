import { Router } from 'express';
import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-primeira-pagina-component',
  templateUrl: './primeira-pagina-component.component.html',
  styleUrl: './primeira-pagina-component.component.css'
})
export class PrimeiraPaginaComponentComponent {

  constructor(private router: Router) {}

  moverParaSegundaPagina(){
    this.router.navigate(["segunda-pagina"]);
  }
}

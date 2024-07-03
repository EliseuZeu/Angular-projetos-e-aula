import { Route } from '@angular/router';
import { AutenticacaoService } from '../autenticacao.service';
import { altoGuard } from './../alto.guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  senha = "";
  email = "";

  constructor(
   private auth: AutenticacaoService,
   private router: Router
  ){}

  logar(){
    if(this.auth.login(this.email,this.senha)){
      this.router.navigate(["pagina-protegida"]);
      return;
    }

    alert("Login invalido");
    this.email = "";
    this.senha = "";
  }
}

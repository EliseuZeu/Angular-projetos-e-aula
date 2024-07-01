import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrl: './exemplo-servicos1.component.css'
})
export class ExemploServicos1Component {
    nome = "";
    adicionarNome(){
    alert(`O nome ${this.nome} foi adicionado`)
    }
}

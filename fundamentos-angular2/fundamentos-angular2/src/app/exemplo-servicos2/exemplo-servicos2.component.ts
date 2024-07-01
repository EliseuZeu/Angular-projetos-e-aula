import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrl: './exemplo-servicos2.component.css'
})
export class ExemploServicos2Component {

  descricao = "";

  adicionarProduto(){
    console.log(`Produto foi adicionaro e a descrição: ${this.descricao}`);
  }
}

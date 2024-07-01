import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrl: './exemplos-angular.component.css'
})
export class ExemplosAngularComponent {
  nome = '';

  adicionarNome() {
    alert(this.nome);
  }
}

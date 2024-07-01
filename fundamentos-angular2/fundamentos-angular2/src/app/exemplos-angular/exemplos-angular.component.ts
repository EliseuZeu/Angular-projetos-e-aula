import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrl: './exemplos-angular.component.css'
})
export class ExemplosAngularComponent {
  nome = "";

  constructor(private logger: LoggerService) {

  }

  adicionarNome() {
    this.logger.logar(`O nome ${this.nome} foi adcionado`)
  }
}

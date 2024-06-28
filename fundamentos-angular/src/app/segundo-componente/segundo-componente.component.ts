import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = "Joao";
  dataNascimento = "1995-01-03";
  urlImagem = "/fundamentos-angular/assets/.img";

  //Mostrando a data de nascimento função
  mostrarDataNascimento(){
    alert(`A data de nascimento do joao e: ${this.dataNascimento}`)
  }
}

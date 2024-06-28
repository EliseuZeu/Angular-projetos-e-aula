import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-redenriando-listas',
  templateUrl: './redenriando-listas.component.html',
  styleUrl: './redenriando-listas.component.css'
})
export class RedenriandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "Celular Xl", descricao: "Um celular grande e bom", esgotado: false},
    {id: 2, nome: "Celular ", descricao: "Um celular grande e bom", esgotado: true},
    {id: 3, nome: "Celular Octamu", descricao: "Um celular grande e bom", esgotado: false}
  ]
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrl: './pagina-com-parametros.component.css'
})
export class PaginaComParametrosComponent {
  id: number | null = null;
  idade: number | null = null;
  nome:string | null = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(__param => {
      this.id = Number(__param.get("id"));
    });

    this.route.queryParamMap.subscribe(__param => {
      this.idade = Number(__param.get("idade"));
      this.nome = __param.get("nome");
    })
  }
}

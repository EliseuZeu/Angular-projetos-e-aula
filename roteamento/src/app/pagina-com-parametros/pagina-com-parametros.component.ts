import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit {
  id: number | null = null;
  idade: number | null = null;
  nome: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
    });

    this.route.queryParamMap.subscribe(queryParamMap => {
      this.idade = Number(queryParamMap.get('idade'));
      this.nome = queryParamMap.get('nome');
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  newItem  = '';


  constructor() {
  }

  ngOnInit(): void {
  }


  Adicionar() {
    this.produtos.push(this.newItem);
    this.newItem = "";

  }

  remover() {
    this.produtos.pop();
  }
}

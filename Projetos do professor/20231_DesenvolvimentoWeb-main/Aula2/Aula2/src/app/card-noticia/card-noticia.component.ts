import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css']
})
export class CardNoticiaComponent implements OnInit {

  numero1 : number = 0;
  desabilitaBotao : boolean = false;
  varivavelExemplo : any;

  constructor() { }

  ngOnInit(): void {
    this.numero1 = 10;
    this.varivavelExemplo = "Rafael";
    this.varivavelExemplo = 10;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-pai',
  templateUrl: './pagina-pai.component.html',
  styleUrls: ['./pagina-pai.component.css']
})
export class PaginaPaiComponent implements OnInit {
  valor : number =3;
  aplicaCSS : boolean = true;
  corFundo : string = "green";
  sucesso : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  autenticado : boolean = false;
  menus : any = [
    {descricao : "Home", url : "/noticia"},
    {descricao : "Calcular Média", url : "/calcular-media"},
    {descricao : "Pai", url : "/pai"},
    {descricao : "Sair", url : "/logoff"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-filho1',
  templateUrl: './pagina-filho1.component.html',
  styleUrls: ['./pagina-filho1.component.css']
})
export class PaginaFilho1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  abrir(){
    this.router.navigate(['/calcular-media',10,10,10,10]);
  }

}

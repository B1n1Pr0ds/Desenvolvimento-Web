import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-rotativa',
  templateUrl: './noticia-rotativa.component.html',
  styleUrls: ['./noticia-rotativa.component.css']
})
export class NoticiaRotativaComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {
  }

}

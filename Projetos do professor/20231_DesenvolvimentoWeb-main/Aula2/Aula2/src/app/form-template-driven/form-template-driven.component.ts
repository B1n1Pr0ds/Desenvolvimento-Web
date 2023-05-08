import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {
  email : string;
  idade : number = 0;
  nome : string;
  constructor() { }

  ngOnInit(): void {
  }

  salvar(form){
    if (form.valid) {
      console.log("SALVOU!!!");
    }
    else{
      console.log("Form Inválido");
    }
  }

}

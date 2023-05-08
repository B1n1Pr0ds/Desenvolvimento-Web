import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      idade: new FormControl(0,[Validators.min(0), Validators.max(150)])
    });
  }

  salvar(){
    
  }

}

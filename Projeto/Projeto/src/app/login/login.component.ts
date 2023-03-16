import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = "";
  senhausuario: string = "";
  login: string = "";

  
  constructor (private router: Router){}
  admLogin(){
    if(this.usuario == "admin" && this.senhausuario == "123")
    {
        this.router.navigate(['/home']);
    }
      else
      {
        this.login = "Usuario ou senha invalido";
      }
  } 
  }




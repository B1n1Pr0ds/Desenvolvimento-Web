import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string="";
  senha: string="";
  login: string="";

  
  constructor ( private router: Router ) {}
  
  AdmLogin()
  {
    if (this.usuario == "admin" && this.senha == "umdoistres") 
    {
      this.router.navigate(['/home']);
    }
    else
    {
      this.login = "Usuário ou senha inválido";
    }
   }


}

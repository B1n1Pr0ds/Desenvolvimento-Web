import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})



export class TarefasComponent {
  Tarefas: any = [
    {descricao: "Lavar a roupa", concluido: true},
    {descricao: "Arrumar o quarto", concluido: true},
    {descricao: "Tomar Café", concluido: false},
    {descricao: "Caminhar", concluido: false},
    {descricao: "Lavar a louça", concluido: false},
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo:'Comunicação entre componentes',
      autoria:'Angular',
      modelo:'modelo1'
    },
    {
      conteudo:'asdnfliasdunlfia',
      autoria:'Eu mesmo',
      modelo:'modelo2'
    },
    {
      conteudo:'Esse conteúdo está sendo mostrado através do componente pai e estamos vendo um pensamento que tem mais de duzentos e cinquenta e seis caracteres e ainda tem que mostrar muito bem esse conteudo fazendo com que o componente seja mostrado com a largura maior ravés do componente pai e estamos vendo um pensamento que tem mais de duzentos e cinquenta e seis caracteres e ainda tem que mostrar muito bem esse conteudo fazendo com que o componente seja mostrado com a largura maior',
      autoria:'Desconhecido',
      modelo:'modelo3'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

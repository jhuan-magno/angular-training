import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-and-paragraph',
  template: `
    <h2>Esse é um título</h2>
    <p>
      Esse parágrafo representa todo o meu medo de programar algo e nunca achar que é o suficiente pra poder trabalhar com isso
    </p>
  `,
  styles:['h2, p{color: blue}']
})
export class TitleAndParagraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

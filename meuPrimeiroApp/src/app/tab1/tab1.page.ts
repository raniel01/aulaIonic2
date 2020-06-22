import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private valor1:string;
    private valor2:string;
    private resultado:number;

    constructor() {}

    calcular(){
        this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);
    }

    exibirResultado(): number{
        return this.resultado
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    private peso:number;
    private altura:number;
    private resultado:number;
    private mensagem:string;
    private cor:string;
    private form:number;

    constructor() {}

    imc(){
      this.resultado = this.peso / (this.altura * this.altura);
      
      if(this.resultado < 16){
            this.mensagem = "Voçê está desnutrido!";
            this.cor = "danger";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else if(this.resultado < 16.99){
            this.mensagem = "Voçê está muito abeixo do peso!";
            this.cor = "danger";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else if(this.resultado < 18.49 ){
            this.mensagem = "Voçê está abeixo do peso!";
            this.cor = "warning";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else if(this.resultado < 24.99 ){
            this.mensagem = "Voçê está no peso ideal!";
            this.cor = "success";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else if(this.resultado < 29.99 ){
            this.mensagem = "Voçê está com sobrepeso!";
            this.cor = "warning";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else if(this.resultado < 34.99 ){
            this.mensagem = "Voçê está com obsidade grau I!";
            this.cor = "danger";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else if(this.resultado < 39.99 ){
            this.mensagem = "Voçê está com obsidade grau II!";
            this.cor = "danger";
            this.form = parseFloat(this.resultado.toFixed(2));
        }else{
            this.mensagem = "Voçê está com obsidade grau III!";
            this.cor = "danger";
            this.form = parseFloat(this.resultado.toFixed(2));
        }
        }

  exibirResultado(): number{
        return this.resultado
    } 
}

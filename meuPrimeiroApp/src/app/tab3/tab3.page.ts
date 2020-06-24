import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
   
    private altura:number;
    private centimetros:number;
    private resultado:number;
    private sexo:string;
    
    
   constructor() {}

   pesoIdeal(){
       this.centimetros = this.altura*100;
       
       if(this.sexo == "m")
       {
            this.resultado = (this.centimetros-100)-((this.centimetros-150)/4);
       }else if(this.sexo == "f")
       {
            this.resultado = (this.centimetros-100)-((this.centimetros-150)/2);
       }
   }

    exibirResultado(): number{
        return this.resultado
    }
}

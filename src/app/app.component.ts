import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pai = "pai enviando dados pra testar input";

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
  
}

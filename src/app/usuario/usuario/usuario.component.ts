import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  @Input() filho : any;
  twoway: string = "";
    
   pessoas: Person[] = [];

   pessoa = new Person("");
  ngOnInit(): void { }

  botaoClicado(){
    alert("botao clicado")
  }

  onKeyUp(evento : any){
    console.log(evento.target.value)
  }

  salvarPessoa(){
    console.log(this.pessoa)
    this.pessoas.push(this.pessoa);

  }
 
}

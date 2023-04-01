import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() filho : any;
  twoway: string = "";

  constructor() { }

  ngOnInit(): void { }

  botaoClicado(){
    alert("botao clicado")
  }

  onKeyUp(evento : any){
    console.log(evento.target.value)
  }
 
}

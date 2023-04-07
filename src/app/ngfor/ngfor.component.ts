import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  favorito: boolean = false;
  //nomes = [""];
  nomes: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  adicionaNome(nome:string){
    this.nomes.push(nome);

  }

  favorita(){
    this.favorito = !this.favorito;
  }

}

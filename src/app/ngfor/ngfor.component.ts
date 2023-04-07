import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  //nomes = [""];
  nomes: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  adicionaNome(nome:string){
    this.nomes.push(nome);
  }

}

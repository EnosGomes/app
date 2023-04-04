import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  renderiza = false;

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  incrementa(){
    this.valor++;
    this.mudouValor.emit({
      novoValor: this.valor
    })
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor
    })
  }

  mostraParagrafo(){
    this.renderiza = !this.renderiza;
  }

}

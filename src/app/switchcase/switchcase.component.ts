import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  aba: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}

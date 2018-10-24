import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servidores]',
  selector: '.app-servidores',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

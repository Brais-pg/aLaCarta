import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  menus = [{nombre: 'menu 1', primerPlato: 'puré', segundoPlato: 'Costillas', precio: 15}, 
  {nombre: 'menu 2', primerPlato: 'Sopa de fideos', segundoPlato: 'Bacalao', precio: 13}];

}

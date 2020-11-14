import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.scss']
})
export class MenuDesplegableComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  menus = [{nombre: 'menu 1', primerPlato: 'puré', segundoPlato: 'Costillas', precio: 15}, 
  {nombre: 'menu 2', primerPlato: 'Sopa de fideos', segundoPlato: 'Bacalao', precio: 13}];

}

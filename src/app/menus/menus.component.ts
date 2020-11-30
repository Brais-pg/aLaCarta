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

  menus = [  {nombre: 'Menú del día', primerPlato: 'Ensalada con queso de cabra', segundoPlato: 'Bacalao a la brasa', postre: 'Flan de huevo', precio: 15},
  {nombre: 'menu 1', primerPlato: 'puré', segundoPlato: 'Costillas', postre: 'Arroz con leche', precio: 15}, 
  {nombre: 'menu 2', primerPlato: 'Sopa de fideos', segundoPlato: 'Bacalao', postre: 'Crema catalana', precio: 13},
  {nombre: 'Menu infantil', primerPlato: 'Crema de calabaza', segundoPlato:'Hamburguesa de pollo con queso', postre: 'Natillas', precio: 10}];

}

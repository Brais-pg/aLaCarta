import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../reservas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  reservas=null;
  
  res={
    dni:null,
    nombre:null,
    numPersonas:null,
    fecha:null
  }

  constructor(private reservasServicio: ReservasService) { }

  ngOnInit(): void {
    this.recuperarTodos();
  }

  /*Reservas backend*/

  recuperarTodos() {
    this.reservasServicio.recuperarTodos().subscribe(result => this.reservas = result);
  }

  alta() {
    this.reservasServicio.alta(this.res).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(dni) {
    this.reservasServicio.baja(dni).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.reservasServicio.modificacion(this.res).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo) {
    this.reservasServicio.seleccionar(codigo).subscribe(result => this.res = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}

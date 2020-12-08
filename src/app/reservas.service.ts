import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  url='http://localhost:80/proyectoBackend/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(reserva) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(reserva));    
  }

  baja(dni:string) {
    return this.http.get(`${this.url}baja.php?codigo=${dni}`);
  }
  
  seleccionar(dni:string) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${dni}`);
  }

  modificacion(reserva) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(reserva));    
  } 
}
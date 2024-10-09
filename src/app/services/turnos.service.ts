import { Injectable } from '@angular/core';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  private turnos: Turno[] = [];

  constructor(){}

  getTurnos(): Turno[] {
    return this.turnos;
  }

  addTurno(turno: Turno): void {
    this.turnos.push(turno);
  }

  updateTurno(updatedTurno: Turno): void {
    const index = this.turnos.findIndex(t => 
      t.fecha === updatedTurno.fecha && 
      t.horario === updatedTurno.horario && 
      t.cancha === updatedTurno.cancha
    );
    if (index !== -1) {
      this.turnos[index] = updatedTurno;
    }
  }

  
}
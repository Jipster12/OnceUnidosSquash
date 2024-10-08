import { Injectable } from '@angular/core';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  turnos: Turno[] = [];

  constructor() { }

  agregarTurno(turno:Turno){
    this.turnos.push(turno);
    //apiservice.post(turno)
  }
}

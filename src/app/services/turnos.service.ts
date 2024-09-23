import { Injectable } from '@angular/core';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  turnos: Turno[] = [];

  constructor() { }

  agregarTurno(turno:Turno){
    //apiservice.post(turno)
  }
}

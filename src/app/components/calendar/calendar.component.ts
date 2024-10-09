import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import { Router } from '@angular/router';
import { Jugador, jugadores } from 'src/app/models/jugador';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  fechas: string[] = this.obtenerFechas();
  horarios: string[] = this.generarHorarios();
  turnos: Turno[] = [];
  turno: Turno = new Turno(new Jugador("","",""), new Jugador("","",""), "", "", "", 0);
  jugadores: Jugador[] = jugadores;

  constructor(private tService: TurnosService, private router: Router) {}

  ngOnInit() {
    this.turnos = this.tService.getTurnos();
  }

  obtenerFechas(): string[] {
    const hoy = new Date();
    return Array(3).fill(null).map((_, i) => {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);
      return fecha.toLocaleDateString('es-ES');
    });
  }

  generarHorarios(): string[] {
    return Array(30).fill(null).map((_, i) => {
      const hora = Math.floor(i / 2) + 9;
      const minutos = i % 2 === 0 ? '00' : '30';
      return `${hora.toString().padStart(2, '0')}:${minutos}`;
    });
  }

  getTurnosByFechaYCancha(fecha: string, cancha: number): Turno[] {
    return this.turnos.filter(t => t.fecha === fecha && t.cancha === cancha);
  }

  onDrop(event: CdkDragDrop<Turno[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    // Actualizar la hora y cancha del turno basado en su nueva posición
    const turno = event.container.data[event.currentIndex];
    turno.horario = this.horarios[event.currentIndex % this.horarios.length];
    turno.cancha = parseInt(event.container.id.split('-')[1]);
    this.tService.updateTurno(turno);
  }

  onSubmitTurno() {
    this.tService.addTurno(this.turno);
    this.turno = new Turno(new Jugador("","",""), new Jugador("","",""), "", "", "", 0);
  }

  abrirFormularioJugador() {
    // Implementar lógica para abrir el formulario de jugador
  }
}
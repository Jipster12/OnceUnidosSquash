import { Component } from '@angular/core';

@Component({
  selector: 'app-turnera',
  templateUrl: './turnera.component.html',
  styleUrls: ['./turnera.component.css']
})
export class TurneraComponent {

  // Array con horarios desde 15:00 hasta 23:00 cada 30 minutos
  horarios: string[] = [
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
  ];

  // Días de la semana de lunes a viernes
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
}

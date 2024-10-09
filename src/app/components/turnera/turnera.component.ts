import { Component } from '@angular/core';

@Component({
  selector: 'app-turnera',
  templateUrl: './turnera.component.html',
  styleUrls: ['./turnera.component.css']
})
export class TurneraComponent {
  horarios: string[] = [
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
  ];
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  datosTabla: string[][] = [
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', '']
  ];
  coloresTabla: string[][] = [
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', ''],  
    ['', '', '', '', '']
  ];

  // Variables del formulario
  formHorario: number = 0;  // Índice seleccionado de horario
  formDia: number = 0;      // Índice seleccionado de día
  formContenido: string = '';  // Contenido ingresado
  formColor: string = '#ffffff'; // Color seleccionado (por defecto blanco)

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    // Asignar el contenido y el color a la celda seleccionada
    this.datosTabla[this.formHorario][this.formDia] = this.formContenido;
    this.coloresTabla[this.formHorario][this.formDia] = this.formColor;

    // Limpiar el formulario
    this.formContenido = '';
    this.formColor = '#ffffff';
  }
}


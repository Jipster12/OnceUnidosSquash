import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import { AddTurnoComponent } from '../add-turno/add-turno.component';
import { Router } from '@angular/router';
import { Jugador, jugadores } from 'src/app/models/jugador';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  fechas: string[]= this.obtenerFechas()
  horarios: string[]= this.generarHorarios();
  turnos : Turno[]= this.tService.turnos
  turno: Turno= new Turno(new Jugador("","",""),new Jugador("","",""),"","","",0);
  addturno:boolean=false;

  constructor(private tService: TurnosService,private router:Router){}

  obtenerFechas():string[]{
    const hoy: Date = new Date();
    const formatearFecha = (fecha: Date): string => {
      const year: number = fecha.getFullYear();
      const mes: string = String(fecha.getMonth() + 1).padStart(2, '0');
      const dia: string = String(fecha.getDate()).padStart(2, '0');
      return `${dia}/${mes}/${year}`;
    };
    const fechas: string[] = [];
    fechas.push(formatearFecha(hoy)); // Fecha de hoy
    hoy.setDate(hoy.getDate() + 1);
    fechas.push(formatearFecha(hoy)); // Fecha de mañana
    hoy.setDate(hoy.getDate() + 1);
    fechas.push(formatearFecha(hoy)); // Fecha del día siguiente
    return fechas;
  }

  generarHorarios(): string[] {
    let horarios: string[] = [];
    for (let i = 9; i <= 23; i++) {
        let hour = i+":30"
        horarios.push(String(i))
        horarios.push(hour)
     }
    return horarios;
    }
  
    ngOnInit(){
      this.turnos=this.tService.turnos;
      let turno = new Turno(jugadores[0],jugadores[1],"9:30",this.fechas[1],"primera",2);
      let t = new Turno(jugadores[0],jugadores[1],"9:30",this.fechas[0],"primera",1);
      let u = new Turno(jugadores[0],jugadores[1],"10:30",this.fechas[1],"primera",2);
      let r = new Turno(jugadores[0],jugadores[1],"9",this.fechas[1],"primera",1);
      let n = new Turno(jugadores[0],jugadores[1],"11",this.fechas[0],"primera",2);
      let p = new Turno(jugadores[0],jugadores[1],"14:30",this.fechas[0],"primera",1);
      let s = new Turno(jugadores[0],jugadores[1],"10",this.fechas[2],"primera",1);
      this.turnos.push(turno,t,u,r,n,p,s)
    }

  getTurnoByHora(hora:string,fecha:string){
    let turno = this.turnos.find(turno=>{
      if(turno.hora===hora && turno.fecha===fecha){
        this.turno=turno;
        return turno;
      }
      else{
        this.turno=new Turno(new Jugador("","",""),new Jugador("","",""),"","","",0);
        this.turno.color='#FFFFFF'
        return null
      }
    })
    return turno;
  }

  toggleAddTurno(){
    this.addturno=!this.addturno
  }
}

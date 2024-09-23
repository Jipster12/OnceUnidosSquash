import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Turno } from 'src/app/models/turno';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-add-turno',
  templateUrl: './add-turno.component.html',
  styleUrls: ['./add-turno.component.css']
})
export class AddTurnoComponent implements OnInit {
  @Input() fecha!: string;
  @Input() hora!: string;
  @Input() cancha!: number;
  turnoForm = new FormGroup({
    nombrej1: new FormControl('', Validators.required),
    apellidoj1: new FormControl('', Validators.required),
    nombrej2: new FormControl('', Validators.required),
    apellidoj2: new FormControl('', Validators.required),
    categoria: new FormControl('',Validators.required)
  });

  constructor(private turnos:TurnosService) { }

  ngOnInit(): void {

    
  }

  OnSubmit(){
    const nombrej1 = this.turnoForm.get('nombrej1')?.value!;
    const apellidoj1 = this.turnoForm.get('apellidoj1')?.value!;
    const nombrej2 = this.turnoForm.get('nombrej2')?.value!;
    const apellidoj2 = this.turnoForm.get('apellidoj2')?.value!;
    const categoria = this.turnoForm.get('categoria')?.value!;
    let turno = new Turno(nombrej1,apellidoj1,nombrej2,apellidoj2,this.hora,this.fecha,categoria,this.cancha)
    this.turnos.agregarTurno(turno)
    
  }


}

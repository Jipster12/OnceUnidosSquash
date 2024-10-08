import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})
export class AddPlayerFormComponent implements OnInit {
  playerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.playerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      categoria: ['', Validators.required],
      nivel: ['', Validators.required],
      descripcion: ['']
    });
  }

  onSubmit() {
    if (this.playerForm.valid) {
      console.log(this.playerForm.value);
      // Aquí puedes agregar la lógica para enviar los datos del jugador
    }
  }
}
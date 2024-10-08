import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { jugadores } from '../../models/jugador';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchTerm: string = '';
  users= jugadores;
  filteredUsers: Jugador[] = [];
  page!:number;

  ngOnInit(): void {
    this.filteredUsers = this.users;
  }

  searchUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.apellido.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

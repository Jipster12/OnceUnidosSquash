import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TurneraComponent } from './components/turnera/turnera.component';

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserListComponent},
  {path: 'turnera', component: TurneraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TurneraComponent } from './components/turnera/turnera.component';
import { AddPlayerFormComponent } from './components/add-player-form/add-player-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    LoginComponent,
    UserListComponent,
    TurneraComponent,
    AddPlayerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

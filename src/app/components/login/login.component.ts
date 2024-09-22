import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]),
    password: new FormControl('', Validators.minLength(6))
  });

  private user!: User;
  errordiv = "";
  errordiv2 = "";

  get invalidEmail() {
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }

  get invalidPassword() {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }

  onSubmit(){
    const email = this.loginForm.get('email')?.value!;
    const password = this.loginForm.get('password')?.value!;
    console.log(email,password);
    
  }
}

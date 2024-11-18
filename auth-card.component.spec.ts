import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCardComponent {
  loginData = { email: '', password: '' };
  signupData = { name: '', email: '', password: '' };

  onLogin() {
    console.log('Login Data:', this.loginData);
    
  }

  onSignup() {
    console.log('Signup Data:', this.signupData);
    
  }
}

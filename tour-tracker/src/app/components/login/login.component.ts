import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:false
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService,private readonly storageService: StorageService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.storageService.JWTToken = response.token;
        this.storageService.UserDetails = response.user;
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Login failed', error);
      },
    });
  }
}
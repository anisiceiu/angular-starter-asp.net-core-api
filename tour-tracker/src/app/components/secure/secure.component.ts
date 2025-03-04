import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
  standalone:false
})
export class SecureComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
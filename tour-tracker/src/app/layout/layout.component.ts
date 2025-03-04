import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
   constructor(private authService: AuthService)
   {

   }

   toggleSidebar()
   {
    document.querySelector("#sidebar")?.classList.toggle("collapsed");
   }

   logout() {
    this.authService.logout();
  }
}

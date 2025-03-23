import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string


  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.localStorageService.set('user', this.username);
      this.router.navigate(['/users']);
    } else {
      alert('Invalid credentials');
    }
  }
}
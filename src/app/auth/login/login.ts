import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServ } from '../user-serv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userdata = {
    username: '',
    password: '',
  };
  service = inject(UserServ);
  allUsers: any;
  router = inject(Router);
  isAuth = true;
  constructor() {
    this.service.getUsersData().subscribe((res) => {
      this.allUsers = res.users;
    });
  }
  login(data: any) {
    this.allUsers.forEach((user: any) => {
      if (data.username == user.username && data.password == user.password) {
        localStorage.setItem('auth', 'true');
        this.isAuth = true;
        this.router.navigate(['/home']);
      } else {
        this.isAuth = false;
      }
    });
  }
}

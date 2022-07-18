import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string='';
  constructor(private userService: UserService, private router: Router) { }
  username: string = '';
  password: string = '';
  role: string = '';

  onSubmit(loginForm: NgForm) {
    this.userService.getUsername(loginForm.value).subscribe((res) => {
      
      this.userService.showUser = this.username;
      this.role = Object.values(res)[1];
      localStorage.setItem('token', Object.values(res)[0])
      this.userService.setUserRole = this.role
      if (Object.values(res)[1] === "Admin") {
        this.router.navigate(['/table']);
      }
      else if (Object.values(res)[1] === "User") {
        this.router.navigate(['/course']);
      }
    });
  }
}

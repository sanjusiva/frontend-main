import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }
  username: string = '';
  password: string = '';
  role: string = '';
  id:string='';

  onSubmit(loginForm: NgForm) {
    this.userService.getUsername(loginForm.value).subscribe((res:any) => {
      this.userService.showUser = this.username;
      this.role = res['role'];
      this.id=res['_id']
      this.userService.setUserId = this.id;
      localStorage.setItem('token', res['token'])
      this.userService.setUserRole = this.role
      if (res['role'] === "Admin") {
        this.router.navigate(['/table']);
      }
      else if (res['role'] === "User") {
        this.router.navigate(['/course']);
      }
    });
  }
}

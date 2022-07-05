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
export class LoginComponent implements OnInit {
  error: any;
  constructor(private userService: UserService, private router: Router) { }
  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.getUsername(this.username, this.password).subscribe((res) => {
      this.userService.showUser=this.username
      console.log(res);  
      if (Object.values(res)[0] == "Admin") {
        this.router.navigate(['/table']);
      }
      else if (Object.values(res)[0] == "User") {
        this.router.navigate(['/course']);
      }
      else if (Object.values(res)[0] == "invalid user") {
        alert("Invalid username or password");
      }
    },(err)=>{
      this.error=err.message;
      console.log(err.error.message);
      
    });
  }
}

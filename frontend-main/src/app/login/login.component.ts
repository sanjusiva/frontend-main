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
  role:string='';

  ngOnInit(): void {
    console.log(this.userService.username);
    
  }
  onSubmit() {
    this.userService.getUsername(this.username, this.password).subscribe((res) => {
      this.userService.showUser=this.username;
      console.log(JSON.stringify(res));
      
      console.log(Object.values(res)[0]);  
      this.role=Object.values(res)[1];
      localStorage.setItem('token',Object.values(res)[0])
      this.userService.setUserRole=this.role
      if (Object.values(res)[1] === "Admin") {
        this.router.navigate(['/table']);
      }
      else if (Object.values(res)[1] === "User") {
        this.router.navigate(['/course']);
      }
    },(err)=>{
      this.error=err.message;
      console.log(err.error.message);
      alert(err.error.message);
    });
  }
}

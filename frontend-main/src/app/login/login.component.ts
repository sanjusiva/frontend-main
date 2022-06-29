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
  constructor(private userService: UserService, private router: Router) { }
  username: string = '';
  password: string = '';

  // display(formData: NgForm) {
  //   console.log(formData.value);
  //   if (this.username == "Sanju" && this.psw == "sanju123") {
  //     console.warn("you are admin");
  //     //this.username='Sanju';
  //     //console.log(this.userService.getDomainName());
      
  //     this.userService.getUsername(this.username);
  //     this.router.navigate(['/material']);
  //   }
  //   else {
  //     this.userService.getUsername(this.username);
  //     this.router.navigate(['/course']);
  //   }
  // }
  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.getUsername(this.username,this.password).subscribe((res) => {
      //this.userService.users = res as User[];
     //this.userService.getCurrentUser(this.username)
        this.userService.showUser=this.username
      if(res==true)
      {
        if(this.username=="Sanju" && this.password=="sanju123"){
        this.router.navigate(['/table']);
        }
        else{
        this.router.navigate(['/course']);
        }
      }
      else{
         alert("Invalid username or password");      
      }
    });
  }
}

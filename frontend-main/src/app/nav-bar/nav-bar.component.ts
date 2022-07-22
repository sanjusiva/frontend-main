import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  id:string='';
  constructor(public userService: UserService, private route: Router) { }


  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['']);
  }
  profile() {
    this.id=this.userService.getUserId
    this.route.navigate(['/register',this.id])
  }
  course(){
    this.id=this.userService.getUserId;
    this.route.navigate(['/yourCourses',this.id])
  }
}

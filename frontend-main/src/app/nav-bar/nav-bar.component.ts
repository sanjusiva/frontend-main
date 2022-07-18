import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  username:string="";
  constructor(public userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.username=this.userService.getUser
    
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['']);
  }

}

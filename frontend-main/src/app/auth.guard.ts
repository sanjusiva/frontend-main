import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from './shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService,private router:Router){}
  canActivate():boolean{
    if(this.userService.logged()){
      return true;
    }
    else{
      alert("Please login to proceed")
      this.router.navigate(['']);
      return false
    }
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './shared/user.model';
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

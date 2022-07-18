import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private userService:UserService,private route:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    if(this.userService.loggedIn() == 'Admin'){
      return true;
    }
    else{
      alert("After login admin can view this page")
      this.route.navigate([''])
      return false;
    }
  }
  
}

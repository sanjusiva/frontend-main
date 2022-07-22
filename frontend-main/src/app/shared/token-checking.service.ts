import { Injectable } from '@angular/core';
import {  HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError,  throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenCheckingService implements HttpInterceptor {

 constructor(private UserService: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.UserService.fetchToken()
      }
    })
    return next.handle(tokenizedReq).pipe(
      catchError((error) => {
        alert(error.error.message)
        return throwError(error)
      })
    )
  }
}

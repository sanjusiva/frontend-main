import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
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
        alert(error.message)
        return throwError(error)
      })
    )
  }
}

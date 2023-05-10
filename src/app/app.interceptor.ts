import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MakeHttpInterceptor implements HttpInterceptor {
  constructor() {}
  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if(token){
        const authReq = req.clone({
          headers: new HttpHeaders({
            'author-name':  'Satish',
            'Authorization': 'Token Exists'
          })
        });
      
      return next.handle(authReq).pipe(
          catchError((error) => {
              return throwError(error);
            })
      );
    }else{
      return next.handle(req)
    }
   }
}
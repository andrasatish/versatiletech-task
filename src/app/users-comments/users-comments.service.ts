import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersCommentsService {

  private users_url = "https://jsonplaceholder.typicode.com/users";
  private comments_url = "https://jsonplaceholder.typicode.com/comments";

  constructor(private _http:HttpClient) { }

  getUsers(): Observable<any>{
    return this.reusableFun(this.users_url);
  }

  getComments(): Observable<any>{
    return this.reusableFun(this.comments_url);
  }

  reusableFun(url) {
    localStorage.setItem('token',JSON.stringify({token:'xyz'}));
    return this._http.get<Observable<any>>(url).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}

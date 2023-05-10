import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private countries_api = "https://restcountries.com/v3.1/all";

  constructor(private _http:HttpClient) { }

  getCountries(): Observable<any>{
    localStorage.removeItem('token');
    return this._http.get<Observable<any>>(this.countries_api).pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}

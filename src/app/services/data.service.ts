import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/Country';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // API path
  base_path = 'http://ec2-34-249-218-118.eu-west-1.compute.amazonaws.com:3000/countries';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

   // Get single data by ID
   getItem(id): Observable<Country> {
    return this.http
      .get<Country>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get filtered data by name, Currently not used.
  getFiltered(name): Observable<Country> {
    return this.http
      .get<Country>(this.base_path + '?filter[name]=' + name)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get data
  getList(): Observable<Country> {
    return this.http
      .get<Country>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}

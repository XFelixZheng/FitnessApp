import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private api = 'http://localhost:3000/fitnessapp-api';

  constructor(private http: HttpClient){}

  getAll(): Observable<User[]> {
    return this.http.get<any[]>(`${this.api}/users`);
  }

  getSingle(username: string): Observable<User[]> {
    return this.http.get<any[]>(`${this.api}/users/${username}`).pipe(retry(5), catchError(this.errorHandler));
  }

  createUser(user: User): Observable<any> {
    return this.http.post<any[]>(`${this.api}/users`,
    user,
    {responseType: 'json'})
    .pipe(
      catchError(this.errorHandler))
      ;
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Error found!');
    return throwError(error);
  }
}

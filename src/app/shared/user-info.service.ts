import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this.http.get<any[]>(`${this.api}/users/${username}`);
  }
}

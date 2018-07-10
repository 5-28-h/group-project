import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class UserService {
  user_id: String;
  userData = JSON.parse(localStorage.getItem('currentUser'));
    constructor(
      public http: HttpClient) { }

    create(user:User): Observable<User> {
      return this.http.post<User>('/register', user, httpOptions);
    }

    deleteUser(){
      return this.http.delete(`/profile/${this.userData.id}`)
    }

    updateUser(user:User): Observable<User> {
      return this.http.put<User>(`/update/${this.userData.id}`, user, httpOptions);
    }
    getCurrentUser(){
      return this.http.get(`/update/${this.userData.id}`)
      .pipe(map(
        user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          window.location.href = '/profile';
        }));
    }

}

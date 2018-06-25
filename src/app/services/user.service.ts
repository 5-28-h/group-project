import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class UserService {
    constructor(
      public http: HttpClient) { }

    create(user:User): Observable<User> {
      console.log(user)
      return this.http.post<User>('/register', user, httpOptions);


    }

}

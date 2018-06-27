import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  isLoggedIn = false;
  redirectUrl: string;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('/login', { username: username, password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('token', JSON.stringify(user.token));
                this.isLoggedIn = true;
            }

            return user;
        }));
    }



}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jentry } from '../models/jentry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class JentryService {
    constructor(
      public http: HttpClient) { }

    saveJournalEntry(jentry:Jentry): Observable<Jentry> {
      return this.http.post<Jentry>('/user/profile', jentry, httpOptions);


    }

}

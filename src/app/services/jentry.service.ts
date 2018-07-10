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
      user_id: String;
      userData = JSON.parse(localStorage.getItem('currentUser'));
    constructor(
      public http: HttpClient) { }

    saveJournalEntry(jentry:Jentry): Observable<Jentry> {
      return this.http.post<Jentry>('/user/profile', jentry, httpOptions);
      }

      showJournalEntries(){
        this.user_id = this.userData.id
        return this.http.get(`/user/journalentries/${this.user_id}`);
      }

}

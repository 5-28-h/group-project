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
      return this.http.post<Jentry>('/user/profile', jentry);
      }

      showJournalEntries(){
      this.user_id = this.userData.id
      return this.http.get(`/user/journalentries/${this.user_id}`);
      }

      deleteJentry(j){
        this.user_id = this.userData.id
        return this.http.delete(`/user/journalentries/${this.user_id}/${j}`)
      }
      deleteAllJentries(){
        this.user_id = this.userData.id
        return this.http.delete(`/user/journalentries/${this.user_id}`)
      }

      searchJentries(search){
        this.user_id = this.userData.id
        return this.http.get(`/user/journalentries?user_id=${this.user_id}&mood=${search}`)
      }
      updateJentry(j){
        this.user_id = this.userData.id
        return this.http.put(`/user/journalentries/${this.user_id}/${j._id}`, j)
      }
}

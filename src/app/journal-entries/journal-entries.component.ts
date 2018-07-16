import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JentryService } from '../services/jentry.service';
import { Jentry } from '../models/jentry';


@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {
  public jentries: any;
  constructor(
    public jentry: Jentry,
    public jentryService: JentryService
  ) {
    //Check if logged in
    let token = localStorage.getItem('token');
      	if(!token) {
    			window.location.href = '/login';
   }
 }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      window.location.href = '/login';
  }

  goHome(){
    window.location.href = "/profile";
  }

  showJournalEntries(){
    this.jentryService.showJournalEntries()
    .subscribe(data =>
      this.jentries = data);
  }

  deleteJentry(j){
    this.jentryService.deleteJentry(j)
    .subscribe();
    window.location.href = "/journal";
  }

  editJentry(j){
    console.log(j)
    this.jentryService.updateJentry(j)
    .subscribe();
    window.location.href = "/journal";
  }

  // searchJentriesByDate(){
  //   this.jentryService.searchJentries(this.search)
  //   .subscribe(data =>
  //     this.result = data);
  // }

  ngOnInit() {
    this.showJournalEntries();
  }
}

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
  public data: any;
  constructor(
    public router: Router,
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
    this.router.navigate(['/profile']);
  }

  showJournalEntries(){
    this.jentryService.showJournalEntries()
    .subscribe(data =>
      this.data = data);
  }

  // filterJournalEntries(){
  //   this.jentryService.
  // }

  ngOnInit() {

  }

}

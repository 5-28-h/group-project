import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JentryService } from '../services/jentry.service';
import { UserService } from '../services/user.service';
import { Jentry } from '../models/jentry';
import { User } from '../models/user';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: String;
  userData = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    public router: Router,
    public jentry: Jentry,
    public user: User,
    public jentryService: JentryService,
    public userService: UserService
  ) {
    this.name = this.userData.name;
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

  saveJournalEntry(){
    this.jentry.id = this.userData.id;
    this.jentryService.saveJournalEntry(this.jentry)
    .subscribe();
    this.jentry.mood = "";
    this.jentry.location = "";
    this.jentry.date = "";
    this.jentry.journalEntry = "";
  }

  deleteUser(){
    this.userService.deleteUser()
    .subscribe();
    this.logout();
  }

  ngOnInit() {

 }
}

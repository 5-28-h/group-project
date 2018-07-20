import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userData = JSON.parse(localStorage.getItem('currentUser'));
  constructor(public user: User,
              public authenticationService: AuthenticationService,
              public ngFlashMessageService: NgFlashMessageService
            ) { }

  login() {
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(user =>{
                window.location.href = "/profile"},
              err => {
                this.ngFlashMessageService.showFlashMessage({
                messages: ["Incorrect Username or Password"],
                timeout: 3000,
                type: 'danger'
              });
              });
}

  ngOnInit() {
    this.user.username = null;
    this.user.password = null;
  }
}

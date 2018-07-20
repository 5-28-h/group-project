import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    public user: User,
    public userService: UserService,
    public ngFlashMessageService: NgFlashMessageService
  ) { }

   registerUser(user){
      this.userService.create(this.user)
      .subscribe();
      this.ngFlashMessageService.showFlashMessage({
      messages: ["You have successfully registered"],
      timeout: 2000,
      type: 'success'
    });
    setTimeout(function () {
   window.location.href = "/login";
}, 3000);
}
  ngOnInit() {
    this.user.name = null;
    this.user.email = null;
    this.user.username = null;
    this.user.password = null;

  }

}

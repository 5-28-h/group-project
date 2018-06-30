import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    public user: User,
    public userService: UserService) { }

   registerUser(user){
      this.userService.create(this.user)
      .subscribe();
          console.log(this.user);
}
  ngOnInit() {
  }

}

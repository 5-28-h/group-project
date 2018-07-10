import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    public userService: UserService,
    public router: Router) { }

   registerUser(user){
      this.userService.create(this.user)
      .subscribe();
          this.router.navigate(['/login']);
}
  ngOnInit() {
    this.user.name = null;
    this.user.email = null;
    this.user.username = null;
    this.user.password = null;

  }

}

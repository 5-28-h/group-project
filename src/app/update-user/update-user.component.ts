import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(
    public user: User,
    public router: Router,
    public userService: UserService
  ) { }

  updateUser(user){
     this.userService.updateUser(this.user)
     .subscribe();
     this.userService.getCurrentUser()
     .subscribe()
}

  goHome(){
    this.router.navigate(['/profile']);
  }

  ngOnInit() {
    this.user.name = null;
    this.user.email = null;
    this.user.username = null;
    this.user.password = null;
  }

}

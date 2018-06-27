import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public user: User, public authenticationService: AuthenticationService, public router: Router) { }

  login() {
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
                data => {
                    this.router.navigate(['/profile']);
                });
    }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, public router: Router) {
    let token = localStorage.getItem('token');
      	if(!token) {
    			window.location.href = '/login';
        }
   }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
  }

  ngOnInit() {

 }
}

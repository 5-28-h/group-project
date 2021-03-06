import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';
import { UserService } from './services/user.service';
import { JentryService } from './services/jentry.service';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { Jentry } from './models/jentry';
import { UpdateUserComponent } from './update-user/update-user.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'journal', component: JournalEntriesComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    JournalEntriesComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbCollapseModule,
    NgFlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(
      appRoutes
    ),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    RegisterComponent,
    UserService,
    JentryService,
    AuthenticationService,
    Jentry,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

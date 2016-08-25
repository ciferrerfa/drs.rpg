/*   IMPORANTTTTTT

Notice the use of the CanActivate router lifecycle callback. 
Is allow us to restrict the component use to the logged in users only. 
Last thing we need to do, is define our root component and the providers 
in the bootstrap script

import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {AuthenticationService} from '../services/authentication.service';
import {isAuthenticated}  from '../services/authentication.service';

@Component({
  selector: 'home',
  directives: [],
  template: `
    <h2>I am logged in</h2>
    <a href="#" (click)="onLogout()">Logout</a>
  `
})

@CanActivate(() => isLoggedin())
export class Home {
  constructor(public auth: Authentication, public router: Router) {}

  onLogout() {
    this.auth.logout()
      .subscribe(
        () => this.router.navigate(['../Login']),
      );
  }
}
*/
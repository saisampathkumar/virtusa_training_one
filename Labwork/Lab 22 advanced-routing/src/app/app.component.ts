import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example App';
  loginLabel = 'Log In';
  user = 'na';
  constructor( private auth: AuthService, private router: Router) {
  }
  login() {
    if (this.loginLabel === 'Log In') {
      this.auth.login();
      this.user = 'Admin';
      this.loginLabel = 'Log Out';
    } else {
      this.auth.logout();
      this.user = 'na';
      this.loginLabel = 'Log In';
      let link = ['/home'];
      this.router.navigate(link);
    }
  }
}

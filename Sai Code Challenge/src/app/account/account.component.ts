import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username: string;
  password: string;
  logginned: boolean;
  Loggedusername: string;

  userDetails = {
    name: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('logindetails') !== null) {
      this.userDetails = JSON.parse(localStorage.getItem('logindetails'));
      }
    console.log(this.userDetails);
    this.Loggedusername = this.userDetails.name;
    if (this.userDetails.name === '') {
      this.logginned = false;
    } else {
    this.logginned = true;
    }
  }

  logIn() {
    this.logginned = true;
    this.Loggedusername = this.username;

    this.userDetails = {
      name: this.username,
      password: this.password
    };
    localStorage.setItem('logindetails', JSON.stringify(this.userDetails));
  }

  logOut() {
    this.logginned = false;
    this.userDetails = {
      name: '',
      password: ''
    };
    this.username = '';
    this.password = '';
    localStorage.setItem('logindetails', JSON.stringify(this.userDetails));
  }

}

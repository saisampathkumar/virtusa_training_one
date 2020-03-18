import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sai';
  username: string;
  userDetails = {
    name: '',
    password: '',
  };

  constructor(private ls: LogService) {}

  ngOnInit(): void {
    this.ls.getUser().subscribe(username => this.username = username);

  //   if (localStorage.getItem('logindetails') !== null) {
  //     this.userDetails = JSON.parse(localStorage.getItem('logindetails'));
  //     }
  //   this.username = this.userDetails.name;

}

}

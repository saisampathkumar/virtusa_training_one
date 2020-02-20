import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suscription-form',
  templateUrl: './suscription-form.component.html',
  styleUrls: ['./suscription-form.component.css']
})
export class SuscriptionFormComponent implements OnInit {
  @Input() interests:string[]= ["1","2"];
  
  constructor() { }

  ngOnInit(): void {
  }

}

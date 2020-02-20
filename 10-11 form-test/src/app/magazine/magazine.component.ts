import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  fullname = "";
  editions = [
    {editionCode: 1, editionName: "US", price: "10.99 USD"},
    {editionCode: 2, editionName: "CANADA", price: "14.99 CAD"},
    {editionCode: 3, editionName: "International", price: "23.99 USD"},
  ]
  selectedEdition = this.editions[0];
  slectedShipping = "";
  acceptPolicy = false;

  submitForm(){
    let requestData = {
      customerName: this.fullname,
      productCode: this.selectedEdition.editionCode,
      acceptPolicy: this.acceptPolicy,
      shipMode: this.slectedShipping
    }
    alert(JSON.stringify(requestData));
  }

  constructor() { }

  ngOnInit(): void {
  }

}

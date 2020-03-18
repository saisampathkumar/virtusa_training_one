import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  magazineForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    selectedEdition : new FormControl('this.editions[0]', [Validators.required]),
    slectedShipping: new FormControl(''),
    acceptPolicy : new FormControl(false)
  });
  fullname = '';
  Email = '';
  editions = [
    {editionCode: 1, editionName: 'US', price: '10.99 USD'},
    {editionCode: 2, editionName: 'CANADA', price: '14.99 CAD'},
    {editionCode: 3, editionName: 'International', price: '23.99 USD'},
  ];
  selectedEdition = this.editions[0];
  slectedShipping = '';
  acceptPolicy = false;

  submitForm() {
    const requestData = this.magazineForm.value;
    // {
    //   customerName: this.fullname,
    //   productCode: this.selectedEdition.editionCode,
    //   acceptPolicy: this.acceptPolicy,
    //   shipMode: this.slectedShipping
    // }
    console.log(requestData);
    alert(JSON.stringify(requestData));
  }

  constructor() { }

  ngOnInit(): void {
  }

}

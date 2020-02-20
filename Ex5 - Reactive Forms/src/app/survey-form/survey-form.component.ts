import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  states:string[] = ["AK - Alaska","AL - Alabama", "AR - Arkansas","AS - American Samoa","AZ - Arizona",
  "CA - California","CO - Colorado","CT - Connecticut","DC - District of Columbia","DE - Delaware",
  "FL - Florida","GA - Georgia","GU - Guam","HI - Hawaii","IA - Iowa","ID - Idaho","IL - Illinois",
  "IN - Indiana","KS - Kansas","KY - Kentucky","LA - Louisiana","MA - Massachusetts","MD - Maryland",
  "ME - Maine","MI - Michigan","MN - Minnesota","MO - Missouri","MS - Mississippi","MT - Montana",
  "NC - North Carolina","ND - North Dakota","NE - Nebraska","NH - New Hampshire","NJ - New Jersey",
  "NM - New Mexico","NV - Nevada","NY - New York","OH - Ohio","OK - Oklahoma","OR - Oregon",
  "PA - Pennsylvania","PR - Puerto Rico","RI - Rhode Island","SC - South Carolina","SD - South Dakota",
  "TN - Tennessee","TX - Texas","UT - Utah","VA - Virginia","VI - Virgin Islands","VT - Vermont",
  "WA - Washington","WI - Wisconsin","WV - West Virginia","WY - Wyoming"];

  flavours:string[] = ["Chocolate", "Vanilla", "Strawberry", "ButterScotch"];
  musics:string[] = ["rock", "pop", "classical", "metal","country"];
  meals:string[] = ["breakfast", "lunch", "dinner"];

  today_date = new Date();
  form_data:object[] = [{}];
  counter:number;
  submit_status:boolean = false;

  SurveyForm = new FormGroup({
    fullname: new FormControl(''),
    movie_data: new FormControl(''),
    music_data: new FormControl(''),
    cups_data: new FormControl(''),
    meal_data: new FormControl(''),
    flavors_data: new FormControl(''),
    age : new FormControl(),
    state_data: new FormControl(''),
    EmailId: new FormControl(''),
    date_data : new FormControl(this.today_date.getMonth()+"/"+this.today_date.getDate()+"/"+this.today_date.getFullYear()),
  })

  


  submitForm(){
    let theForm = this.SurveyForm.value
    console.log( JSON.stringify(theForm,null,2));
    // if(theForm.value.fullname.value !== null){
      this.form_data.push(theForm);
      localStorage.setItem(
        'form_data',
        JSON.stringify(this.form_data, null, 2)
      );
      location.reload();
    // }    
  }


  getData() {
    if (localStorage.getItem('form_data') == null) {
      this.form_data = [];
      this.counter = 0;
    }
    else {
      this.form_data = JSON.parse(localStorage.getItem('form_data'));
      this.counter = this.form_data.length-1;
    }
  }
  constructor(){ 

  }

  ngOnInit(): void {
    this.getData();
  }

}

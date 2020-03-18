import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  
  form_item:object = {};
  form_data:object[] = [{}];

  counter:number;

  submit_status:boolean = false;

  fullname:string;
  movie_data:string;
  music_data:string;
  cups_data:string;
  meal_data:string;
  flavors_data:string;
  age:number;
  state_data:string;
  EmailId:string;
  date_data:string=this.today_date.getMonth()+"/"+this.today_date.getDate()+"/"+this.today_date.getFullYear();

  submitForm(theForm:NgForm){
    console.log(theForm);
    this.form_item = {
    fullname:this.fullname,
    movie_data:this.movie_data,
    music_data:this.music_data,
    cups_data:this.cups_data,
    meal_data:this.meal_data,
    flavors_data:this.flavors_data,
    age:this.age,
    state_data:this.state_data,
    EmailId:this.EmailId,
    date_data:this.date_data,
    counter:this.form_data.length+1,
    }
    console.log(this.form_item);
    console.log(this.date_data);

    if(this.fullname !== null){
      this.form_data.push(this.form_item);
      localStorage.setItem(
        'form_data',
        JSON.stringify(this.form_data)
      );
      location.reload();
    }    
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

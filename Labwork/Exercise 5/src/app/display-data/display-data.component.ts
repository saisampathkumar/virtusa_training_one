import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }
  form_data: object[];
  
  calculated_data:object[]=[]
  asdas=100;
  music_data: object = {
    "Rock": 0,
    "Pop": 0,
    "Classical": 0,
    "Metal": 0,
    "Country": 0,
    "undefined": 0,
    "total":0
  };

  get_calculated_Data() {

    for(var i=1; i<this.form_data.length; i++){
        var d = this.form_data[i] 
        // console.log(d["fullname"]);
        console.log(d["music_data"]);
        console.log(typeof(d["music_data"]));
        if(d["music_data"] !== undefined){
        switch(d["music_data"]){
          case "metal":{
            this.music_data["Metal"]++;
            this.music_data["total"]++;
            break;
          }
          case "rock":{
            this.music_data["total"]++;
            this.music_data["Rock"]++;
            break;
          }case "pop":{
            this.music_data["total"]++;
            this.music_data["Pop"]++;
            break;
          }case "classical":{
            this.music_data["total"]++;
            this.music_data["Classical"]++;
            break;
          }case "country":{
            this.music_data["total"]++;
            this.music_data["Country"]++;
            break;
          }
          default:{
            this.music_data["total"]++;
            this.music_data["undefined"]++;
            break;
          }
        }
      }
    }
    console.log(this.music_data);
  }
  
  getData() {
    if (localStorage.getItem('form_data') == null) {
      this.form_data = [{}];
    }
    else {
      this.form_data = JSON.parse(localStorage.getItem('form_data'));
      console.log(this.form_data);
    }
  }

  ngOnInit(): void {
    this.getData();
    this.get_calculated_Data()
  }

}






    // flavors_data:object={
    //   "Chocolate":0,
    //   "Vanilla":0,
    //   "Strawberry":0,
    //   "ButterScotch":0
    // };
      // this.flavors_data={
      //   "Chocolate":0,
      //   "Vanilla":0,
      //   "Strawberry":0,
      //   "ButterScotch":0
      // };
    // this.form_data.forEach(function(data){
    //   switch(data["flavors_data"]){
    //     case "Chocolate":
    //       this.flavors_data.Chocolate++;
    //       break;
    //     case "Vanilla":
    //       this.flavors_data.Vanilla++;
    //       break;
    //     case "Strawberry":
    //       this.flavors_data.Strawberry++;
    //       break;
    //     case "ButterScotch":
    //       this.flavors_data.ButterScotch++;
    //       break;   
    //   }
    // })
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }
  form_data: object[];
  
  calculated_data:object={
    Music:{
      top:0,
      name:"",
    },
    Meal:{
      top:0,
      name:"",
    },
    Flavors:{
      top:0,
      name:"",
    }
  }

  music_data: object = {
    "Rock": 0,
    "Pop": 0,
    "Classical": 0,
    "Metal": 0,
    "Country": 0,
    "undefined": 0,
    "total":0
  };

  flavors_data:object={
      "Chocolate":0,
      "Vanilla":0,
      "Strawberry":0,
      "ButterScotch":0,
      "undefined": 0,
      "total":0
    };
  favourite_meal:object={
    "breakfast":0,
    "lunch":0,
    "dinner":0,
    "undefined": 0,
    "total":0
  };
  get_calculated_Data() {


    for(var i=0; i<this.form_data.length; i++){
      var d = this.form_data[i] 
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
    // console.log(JSON.stringify(this.music_data,null,1));
    for(var i=0; i<this.form_data.length; i++){
      var d = this.form_data[i] 
      if(d["flavors_data"] !== undefined){
        switch(d["flavors_data"]){
        case "Chocolate":{
          this.flavors_data["Chocolate"]++;
          this.flavors_data["total"]++;
          break;
        }
        case "Vanilla":{
          this.flavors_data["total"]++;
          this.flavors_data["Vanilla"]++;
          break;
        }case "Strawberry":{
          this.flavors_data["total"]++;
          this.flavors_data["Strawberry"]++;
          break;
        }case "ButterScotch":{
          this.flavors_data["total"]++;
          this.flavors_data["ButterScotch"]++;
          break;
        }
        default:{
          this.flavors_data["total"]++;
          this.flavors_data["undefined"]++;
          break;
        }
        }
      }
    }
  // console.log(JSON.stringify(this.flavors_data,null,1));
  for(var i=0; i<this.form_data.length; i++){
    var d = this.form_data[i] 
    if(d["meal_data"] !== undefined){
      switch(d["meal_data"]){
      case "breakfast":{
        this.favourite_meal["breakfast"]++;
        this.favourite_meal["total"]++;
        break;
      }
      case "lunch":{
        this.favourite_meal["total"]++;
        this.favourite_meal["lunch"]++;
        break;
      }case "dinner":{
        this.favourite_meal["total"]++;
        this.favourite_meal["dinner"]++;
        break;
      }
      default:{
        this.favourite_meal["total"]++;
        this.favourite_meal["undefined"]++;
        break;
      }
      }
    }
  }
  // console.log(JSON.stringify(this.favourite_meal,null,1));
  let Music:string[] = ["Rock","Pop","Classical","Metal","Country","total"]
  let M:Number[]=[this.music_data['Rock'],this.music_data['Pop'],this.music_data['Classical'],this.music_data['Metal'],this.music_data['Country']];
  this.calculated_data['Music'].top = ( Math.max.apply(null,M) / this.music_data['total'] )* 100;
  this.calculated_data['Music'].name = Music[M.indexOf(Math.max.apply(null,M))];
  
  let Meal:string[] = ["breakfast","lunch","dinner"]
  let Ml:Number[]=[this.favourite_meal['breakfast'],this.favourite_meal['lunch'],this.favourite_meal['dinner']];
  this.calculated_data['Meal'].top = ( Math.max.apply(null,Ml) / this.favourite_meal['total'] )* 100;
  this.calculated_data['Meal'].name = Meal[Ml.indexOf(Math.max.apply(null,Ml))];

  let Flavor:string[] = ["Chocolate","Vanilla","Strawberry","ButterScotch"]
  let F:Number[]=[this.flavors_data['Chocolate'],this.flavors_data['Vanilla'],this.flavors_data['Strawberry'],this.flavors_data['ButterScotch']];
  this.calculated_data['Flavors'].top = ( Math.max.apply(null,F) / this.flavors_data['total'] )* 100;
  this.calculated_data['Flavors'].name = Flavor[F.indexOf(Math.max.apply(null,F))];
}
  
  getData() {
    if (localStorage.getItem('form_data') == null) {
      this.form_data = [{}];
    }
    else {
      this.form_data = JSON.parse(localStorage.getItem('form_data'));
      // console.log( JSON.stringify(this.form_data,null,1));
    }
  }

  ngOnInit(): void {
    this.getData();
    this.get_calculated_Data()
  }

}
import { Component } from '@angular/core';

@Component({
    selector: "Slide-Show",
    template: `
    <div class="main_block">
        <div style="display:flex">
            <h1>Slide Show Component</h1>
        </div>
        <div class="image_display">
            <button (click)="change_left()"><</button>
            <img src="{{source}}">
            <button (click)="change_right()">></button>
        </div>
    </div>
    `,
    styles:[`
    .main_block{
        color:black;
        background-color:white; 
        padding:2vh
    }
    .image_display{
        box-shadow:2px 2px 10px black; 
        display:flex;
        justify-content:space-between;
        align-self:center;
        height:85vh;
        color:black;
        background-color:white; 
        align-self:center;   
        margin:2vh 15vh;
    }
    div{
        justify-content:center;
    }
    img{
        margin: auto auto;
        box-shadow:2px 2px 10px black; 
        height:100%;
        transition:0.8s;
    }
    button{
        outline:none;
        width:20vw;
        margin: auto 0;
        height:100%;
        font-size:50px;
        border:none;
    }
    button:hover{
        background: linear-gradient(to left, lightgray, darkgray, gray);
    }
    button:hover:last-child{
        background: linear-gradient(to right, lightgray, darkgray, gray);
    }
    h1{
        margin:0;
    }`],

})

export class SlideShow{

    // source for the string
    source: string="./assets/ED61A173-D48B-420E-8EDB-378A5A5E4E95.jpg";

    // image source array
    image:string[] = ["./assets/IMG_3516-EFFECTS.jpg","./assets/ED61A173-D48B-420E-8EDB-378A5A5E4E95.jpg","./assets/IMG_3665-EFFECTS.jpg","./assets/WhatsApp Image 2020-01-16 at 7.24.32 PM.jpeg"];
    
    //initializing the position of the image
    position:number=0;

    // Method to move slide show left
    change_left(){
        if(this.position > 0){
            this.source = this.image[--this.position];
        }
        else{
            this.position = this.image.length-1;
            this.source = this.image[this.position];
        }
    }

    // Method to move slide show right
    change_right(){
        if(this.position < this.image.length-1){
            this.source = this.image[++this.position];
        }
        else{
            this.position=0
            this.source = this.image[this.position];
        }
    }
}
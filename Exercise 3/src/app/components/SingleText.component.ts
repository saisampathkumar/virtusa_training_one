import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector:"Single-Text",
    template: `
    <div>
        <h2>Single Text Component</h2>
        <input type="text" [(ngModel)]="Single_line_data" (keyup)="Send_data()">
    </div>
    `,
    styles:[`
    div{
        z-undex:0;
        border:2px solid black;
        box-shadow:2px 2px 10px grey; 
        margin:2vh;
        height: 28vh;
        display:block;
        padding:1vw;
        width:43vw;
        overflow: hidden;
    }
    h2{
        margin:1vh;
    }
    input{
        border-radius:5px;
        width:60%;
        outline:none;
        height:5vh;
    }
    button{
        height:5vh;
        outline:none;
        border-radius:5px;
    }
    p{
        width:90%;
        height:30%;  
    }
    `],
})

export class SingleText {

    // Two Way binding to get data from the input tag
    @Input() Single_line_data:string="";

    // Creating an EventEmitter for the emiting the data from the single Input
    @Output() SingleTextEvent = new EventEmitter<string>();

    // Creating a method to emit the data
    Send_data(){
        this.SingleTextEvent.emit(this.Single_line_data);
    }
}


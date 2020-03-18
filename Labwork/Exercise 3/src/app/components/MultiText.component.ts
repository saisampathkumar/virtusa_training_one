import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'Multi-Text',
    template: `
    <div>
        <h2>Multiple Text Component</h2>
        <textarea type="text" rows="5" cols="50" [(ngModel)]="Multi_line_data" (keyup)="Send_data()"></textarea>
        <br/>
    </div>
    `,
    styles:[`
    div{
        z-undex:0;
        border:2px solid black;
        box-shadow:2px 2px 10px grey; 
        margin:2vh;
        height:28vh;
        display:block;
        padding:1vw;
        width:43vw;
        overflow: hidden;
    }
    h2{
        margin:1vh;
    }
    textarea{
        border-radius:5px;
        width:90%;
        outline:none;
        height:70%;
    }
    button{
        height:5vh;
        outline:none;
        border-radius:5px;
    }
    p{
        width:90%;
        height:30%;  
        word-wrap: break-word;
    }
    `],
})
export class MultiText{

    // Two Way binding to get data from the Text Area
    @Input() public Multi_line_data:any="";

    // Creating an EventEmitter for the emiting the data from the multii text area
    @Output() MultipleTextEvent = new EventEmitter<string>();
    
    // Creating a method to emit the data
    Send_data(){
        this.MultipleTextEvent.emit(this.Multi_line_data);
    }
}


import { Component, Input } from '@angular/core';

@Component({
    selector: "Parent",
    template: `
    <div class="outer_block">
        <h1>Parent Component</h1>
        <button (click)="toggle()">Toggle</button>
        <div class="Main_block">
            <div class="block_items_columns">
                <div class="output_items">
                    <h2>Single Text</h2>
                    <div>
                        <h3 [hidden]="togglebutton">Output:{{single_line_data}}</h3>          
                    </div>
                </div>
                <div class="output_items">
                    <h2>Multiple Text</h2>
                    <div >
                        <h3 [hidden]="togglebutton">Output:{{multi_line_data}}</h3>        
                    </div>
                </div>
                <div>
                    <Single-Text (SingleTextEvent)="receive_data_singleLine($event)"></Single-Text>
                </div>
                <div>
                    <Multi-Text (MultipleTextEvent)="receive_data_multiLine($event)"></Multi-Text>
                </div>
            </div>
        </div>
        <br/>
    </div>
    `,
    styles:[`
    .outer_block{
        background-color:#2BAE66FF;
        justify-content:center;
        color:black;
        background-color:white; 
    }
    h1{
        display:flex;
        justify-content:center;
        align-text: center;
        color:black;
        background-color:white; 
        padding:2vh;
        margin:0;
    }
    .Main_block{
        margin: 1vh 5vh;
        width:94vw;
        color:black;
        background-color:white; 
    }
    .block_items_columns{
        display: grid;
        grid-template-columns: auto auto;
    }
    .output_items{
        z-undex:0;
        // border:2px solid black;
        margin:2vh;
        box-shadow:2px 2px 10px black;
        height: 25vh;
        width:43vw;
        padding: 1vw;
        overflow:hidden;
        text-overflow: ellipsis;
    }
    h2{
        margin:0;
    }
    h3{
        word-wrap: break-word;
        margin:0;
        color:black;
    }
    button{
        height:6vh;
        display:flex;
        justify-content:center;
        align-text: center;
        width:8vw;
        margin:0 45vw;
    }`],
})

export class Parent{

    // Creating a variable to store the value of a property
    togglebutton : boolean = false;

    // Creating a method to toggle the data to display ON or OFF
    toggle(){
        this.togglebutton  = !this.togglebutton;
    }

    // Creating a variable to two way bind the received single text data
    single_line_data:string;

    // Creating a method to assign the received Single line data to display on the screen
    receive_data_singleLine($event){
        this.single_line_data = $event;
    }
    
    // Creating a variable to two way bind the received Multi text data
    multi_line_data:any;

    // Creating a method to assign the received Multi line data to display on the screen
    receive_data_multiLine($event){
        this.multi_line_data = $event;
    }


}

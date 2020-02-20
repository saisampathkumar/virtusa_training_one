import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>    
      <Parent></Parent>
      
      <Slide-Show></Slide-Show>
  `,
  styles:[`
  h1{
    justify-content:center;
    display:flex; 
    allign-text:center;
    margin:0;
    padding:2vh;
    color:black;
    background-color:white;    
  }`],
})
export class AppComponent {
  title = 'Ex3';
}

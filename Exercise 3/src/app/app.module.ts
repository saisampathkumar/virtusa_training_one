import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiText } from './components/MultiText.component';
import { Parent } from './components/Parent.component';
import { SlideShow } from './components/SlideShow.component';
import { SingleText } from './components/SingleText.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleText,
    Parent,
    MultiText,
    SlideShow,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

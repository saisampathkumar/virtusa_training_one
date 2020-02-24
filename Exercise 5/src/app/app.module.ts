import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { FormsModule } from '@angular/forms';
import { SurveyFormComponent } from './survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

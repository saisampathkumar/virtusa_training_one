import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {FancyText} from './fancy-text/fancy-text.component';
import { AppComponent } from './app.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { FancyCheckbox } from './fancy-checkbox/fancy-checkbox.component';
import { SuscriptionFormComponent } from './suscription-form/suscription-form.component';
import { PlayerSubscribeComponent } from './player-subscribe/player-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyTextComponent,
    FancyCheckbox,
    SuscriptionFormComponent,
    PlayerSubscribeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

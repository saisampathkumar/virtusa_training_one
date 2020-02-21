import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CustomFormsModule } from './custom-forms/custom-forms.module';
// import { CustomWidgetsModule } from './custom-widgets/custom-widgets.module';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  // a component have to be declared inside the declerations array to use it
  declarations: [
    AppComponent,
  ],
  // a module have to be declared in the imports
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule
  ],
  // a service have to be declared in the providers array
  providers: [  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

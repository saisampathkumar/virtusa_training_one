import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsInputFormComponent } from './products-input-form/products-input-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  // a component have to be declared inside the declerations array to use it
  declarations: [ProductsInputFormComponent],
  // a module have to be declared in the imports
  imports: [
    CommonModule,
    FormsModule
  ],
  // to export a local component of the module it have to be inported from declerations array and
  // exported from the export array
  exports : [ProductsInputFormComponent]
})
export class CustomFormsModule { }

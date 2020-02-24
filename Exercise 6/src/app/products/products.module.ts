import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CustomFormsModule } from '../custom-forms/custom-forms.module';
import { CustomWidgetsModule } from '../custom-widgets/custom-widgets.module';
import { ProductsServiceService } from './products-service.service';

@NgModule({
  // a component have to be declared inside the declerations array to use it
  declarations: [ProductsComponent],
  // a module have to be declared in the imports
  imports: [
    CommonModule,
    CustomFormsModule,
    CustomWidgetsModule
  ],
  // to export a local component of the module it have to be inported from declerations array and
  // exported from the export array
  exports : [ProductsComponent],
  // a service have to be declared in the providers array
  providers: [ProductsServiceService]
})
export class ProductsModule { }


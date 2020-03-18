import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list/generic-list.component';



@NgModule({
  // a component have to be declared inside the declerations array to use it
  declarations: [GenericListComponent],
  // a module have to be declared in the imports
  imports: [
    CommonModule
  ],
  // to export a local component of the module it have to be inported from declerations array and
  // exported from the export array
  exports : [GenericListComponent]
})
export class CustomWidgetsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { MatFormField } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatFormField,
    MatSelectModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }

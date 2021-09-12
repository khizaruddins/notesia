import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from './components/editable/editable.component';



@NgModule({
  declarations: [
    EditableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditableComponent
  ]
})
export class EditableModule { }

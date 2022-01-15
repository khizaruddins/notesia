import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderModule } from '../core/header/header.module';



@NgModule({
  declarations: [
    LayoutsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    LayoutsComponent
  ]
})
export class LayoutsModule { }

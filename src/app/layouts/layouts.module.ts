import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeModule } from '../pages/home/home.module';



@NgModule({
  declarations: [
    LayoutsComponent,
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class LayoutsModule { }

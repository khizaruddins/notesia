import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleadsBannerComponent } from './components/googleads-banner/googleads-banner.component';



@NgModule({
  declarations: [
    GoogleadsBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleadsBannerComponent
  ]
})
export class GoogleadsModule { }

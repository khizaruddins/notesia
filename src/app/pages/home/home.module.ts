import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/common/header/header.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'src/app/common/button/button.module';
import { DialogModule } from 'src/app/common/dialog/dialog.module';
import { EditableModule } from 'src/app/common/editable/editable.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    MatToolbarModule,
    ButtonModule,
    DialogModule,
    EditableModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

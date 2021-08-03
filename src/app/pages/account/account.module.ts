import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatTabsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AccountModule { }

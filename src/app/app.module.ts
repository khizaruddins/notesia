import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditableDirective } from './core/directives/editable.directive';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    EditableDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    LayoutsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

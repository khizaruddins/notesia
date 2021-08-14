import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableComponent } from './common/editable/components/editable/editable.component';
import { HomeModule } from './pages/home/home.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSnackBarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

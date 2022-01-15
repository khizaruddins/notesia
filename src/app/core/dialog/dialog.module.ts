import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './service/dialog.service';
import { ButtonModule } from '../button/button.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DialogComponent
  ],
  providers: [DialogService],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DialogComponent
  ],
  entryComponents: [DialogComponent]
})
export class DialogModule { }

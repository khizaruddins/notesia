import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterOutlet
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noteapp';
  constructor() {

  }

}

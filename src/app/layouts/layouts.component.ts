import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
  ],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

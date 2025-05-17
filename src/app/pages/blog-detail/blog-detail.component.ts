import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class BlogDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

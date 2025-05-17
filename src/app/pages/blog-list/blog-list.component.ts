import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

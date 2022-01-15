import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent implements OnInit {

  @ViewChild('editable') editable: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    this.editable?.nativeElement.focus();
  }

}

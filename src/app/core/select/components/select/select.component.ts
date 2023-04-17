import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() selectClass = '';
  @Input() selectWrapperClass = '';
  @Input() options = [];
  @Input() appearance = 'legacy';
  @Input() label = '';
  @Input() formControl = new FormControl<string | null>('');
  @Input() hint = '';
  @Input() error = '';

  @Output() onSelectionChange = new EventEmitter();

  ngOnInit(): void {
  }

  emitEvents(event: any, choice: string): void {
    switch (choice) {
      case 'change': 
        this.onSelectionChange.emit(event);
        break;
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() selectClass = '';
  @Input() selectWrapperClass = '';
  @Input() options: any = [];
  @Input() appearance: MatFormFieldAppearance = 'outline';
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

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormArrayName, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IInputConfig } from 'src/app/shared/interfaces/input.interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() control: FormControl<any> = {} as FormControl<any>;

  @Input() config: IInputConfig = {
    type: 'text',
    label: '',
    placeholder: '',
    errors: {
      required: 'This field is required',
      pattern: 'Invalid',
      minLength: 'Invalid'
    },
    appearance: 'outline',
    hint: '',
    matSuffixIcon: '',
    matPrefixIcon: '',
    suffixContent: '',
    prefixContent: '',
    classes: {
      formFieldClass: '',
      inputClass: '',
      inputWrapperClass: '',
      matSuffixIconClass: ''
    }
  }

  @Output() onInput = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onSuffixIconClick = new EventEmitter();

  ngOnInit(): void {
  }

  emitEvents(event: any, choice: string): void {
    switch (choice) {
      case 'input':
        this.onInput.emit(event);
        break;
      case 'blur':
        this.onBlur.emit(event);
        break;
      case 'suffixIconClick':
        this.onSuffixIconClick.emit(event);
        break;
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IButtonConfig } from '../../shared/interfaces/button.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() config: IButtonConfig = {
    buttonClass: '',
    type: 'button',
    stroked: false,
    label: 'Button',
    isLoading : false,
    route: '',
    isDisabled: false, 
    iconClass: '',
    icon: '', 
    iconPlacement: '', 
    bootstrapIconClass: '', 
    matIcon:'', 
    iconWrapperClass: '',
  }
  @Output() onClick = new EventEmitter();

  ngOnInit(): void {
  }

  emitEvents(event: any, choice: string): void {
    switch(choice) {
      case 'click': 
        this.onClick.emit(event);
    }
  }

}

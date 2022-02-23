import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() buttonClass: any;
  @Input() type = 'button';
  @Input() stroked = false;
  @Input() label: any;
  @Input() isLoading = false;
  @Input() route: any;
  @Input() isDisabled = false; 
  @Input() iconClass= "";
  @Input() icon = ''; // b for bootstrap icons or m for mat icons
  @Input() iconPlacement = ''; // before or after content
  @Input() bootstrapIconClass = ''; // excluding bi get from this link https://icons.getbootstrap.com/icons/123/
  @Input() matIcon=''; // material icon name get from this link https://fonts.google.com/icons?selected=Material+Icons
  @Input() iconWrapperClass = '';
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

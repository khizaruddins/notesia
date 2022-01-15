import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDirective {

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    console.log(event);
  }

  ngOnInit() {
    console.log(this.elRef.nativeElement.innerHTML);
  }

}

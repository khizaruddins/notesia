import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private storageService: StorageService,
  ) { }

  @ViewChild('typedTextRef', { static: true }) typedTextRef: ElementRef<HTMLElement> = {} as ElementRef;
  @ViewChild('cursorRef', { static: true }) cursorRef: ElementRef<HTMLElement> = {} as ElementRef;


  isHome = false;
  userDetails: any;
  typingDelay = 200;
  erasingDelay = 100;
  newTextDelay = 2000; // Delay between current and next text
  textArrayIndex = 0;
  charIndex = 0;

  textArray = [
    'Frontend Engineer',
    'Syed Khizaruddin',
    'a Blogger',
    'change maker'
  ]

  ngOnInit(): void {
    // this.getUserDetails();
  }
  
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    if (this.textArray.length) {
      setTimeout( () => {
      this.type();
      }, this.newTextDelay + 250);
    }
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if(!this.cursorRef.nativeElement.classList.contains("typing")) this.cursorRef.nativeElement.classList.add("typing");
      this.typedTextRef.nativeElement.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout( () => {
        this.type();
      }, this.typingDelay); 
    } 
    else {
      this.cursorRef.nativeElement.classList.remove("typing");
      setTimeout(() => {
        this.erase();
      }, this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      if(!this.cursorRef.nativeElement.classList.contains("typing")) this.cursorRef.nativeElement.classList.add("typing");
      this.typedTextRef.nativeElement.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex-1);
      this.charIndex--;
      setTimeout(() => {
        this.erase();
      },this.erasingDelay)
    } 
    else {
      this.cursorRef.nativeElement.classList.remove("typing");
      this.textArrayIndex++;
      if (this.textArrayIndex>=this.textArray.length) this.textArrayIndex=0;
      setTimeout(() => {
        this.type();
      },this.typingDelay + 1100);
    }
  }


  getUserDetails() {
    this.userDetails = JSON.parse(this.storageService.getLocalStorageItem('user') as any);
  }

}

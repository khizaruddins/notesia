import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor(
        private _snackBar: MatSnackBar
    ) { }

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
    ];

    
    initTextAnimation(typedTextRef: any, cursorRef: any): void {
        if (this.textArray.length) {
          setTimeout( () => {
            this.type(typedTextRef, cursorRef);
          }, this.newTextDelay + 250);
        }
      }
    
      type(typedTextRef: any, cursorRef: any): void {
        if (this.charIndex < this.textArray[this.textArrayIndex].length) {
          if (!cursorRef.nativeElement.classList.contains("typing")) cursorRef.nativeElement.classList.add("typing");
          
          typedTextRef.nativeElement.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
          this.charIndex++;
          setTimeout( () => {
            this.type(typedTextRef, cursorRef);
          }, this.typingDelay); 
        } else {
          cursorRef.nativeElement.classList.remove("typing");
          setTimeout(() => {
            this.erase(typedTextRef, cursorRef);
          }, this.newTextDelay);
        }
      }
    
      erase(typedTextRef: any, cursorRef: any): void {
        if (this.charIndex > 0) {
          if (!cursorRef.nativeElement.classList.contains("typing")) cursorRef.nativeElement.classList.add("typing");
          
          typedTextRef.nativeElement.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex-1);
          this.charIndex--;
          setTimeout(() => {
            this.erase(typedTextRef, cursorRef);
          },this.erasingDelay)
        } else {
          cursorRef.nativeElement.classList.remove("typing");
          this.textArrayIndex++;
          if (this.textArrayIndex>=this.textArray.length) this.textArrayIndex=0;
          setTimeout(() => {
            this.type(typedTextRef, cursorRef);
          },this.typingDelay + 1100);
        }
      }
    //  snackbar functions
    openSnackbarNoDuration(title: string, action: string): void {
        this._snackBar.open(title, action);
    }

    openSnackbarDuration(title: string, action: string, duration: number) {
        this._snackBar.open(title, action, {
            duration
        });
    }

    openSnackbar(title: string, action: string) {
        this.openSnackbarDuration(title, action, 300);
    }
}
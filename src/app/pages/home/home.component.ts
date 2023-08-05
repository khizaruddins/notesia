import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonComponent } from 'src/app/core/button/button.component';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UtilService } from 'src/app/shared/utils/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatToolbarModule,
    ButtonComponent,
    DialogComponent,
    MatProgressSpinnerModule
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.utilService.erase(this.typedTextRef, this.cursorRef);
      } 
    });
   }

  @ViewChild('typedTextRef', { static: true }) typedTextRef: ElementRef<HTMLElement> = {} as ElementRef;
  @ViewChild('cursorRef', { static: true }) cursorRef: ElementRef<HTMLElement> = {} as ElementRef;


  isHome = false;
  userDetails: any;
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.utilService.initTextAnimation(this.typedTextRef, this.cursorRef);
  }

  getUserDetails() {
    this.userDetails = JSON.parse(this.storageService.getLocalStorageItem('user') as any);
  }

}

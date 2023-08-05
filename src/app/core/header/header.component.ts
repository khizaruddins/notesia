import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  @ViewChild('navRef', {static: true}) navRef: ElementRef<HTMLElement> = {} as ElementRef;
  constructor(
    private router: Router,
    private storageService: StorageService,
    private renderer: Renderer2,
    private loginService: LoginService
  ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const lastUrlWithoutParams = this.router.url.split('?')[0].split('/')[this.router.url.split('?')[0].split('/').length - 1];
        if (lastUrlWithoutParams === '') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    }); 
  }
  isHome = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isHome) {
      if (document.body.scrollTop > 20 ||     
      document.documentElement.scrollTop > 20) {
        this.renderer.removeClass(this.navRef.nativeElement, 'navbar-dark')
        this.renderer.addClass(this.navRef.nativeElement, 'navbar-light');
        this.renderer.addClass(this.navRef.nativeElement, 'bg-light');
      } else {
        this.renderer.removeClass(this.navRef.nativeElement, 'navbar-light')
        this.renderer.removeClass(this.navRef.nativeElement, 'bg-light');
        this.renderer.addClass(this.navRef.nativeElement, 'navbar-dark');
      }
    }
  }


  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(): void {
    this.loggedIn = this.storageService.getLocalStorageItem('user') ? true : false;
    // if (!this.loggedIn) {
    //   this.router.navigate(['accounts']);
    // }
  }

  handleUserLogin() {
    if (this.loggedIn) {
      this.loginService.userLogout();
    } else {
      this.router.navigate(['accounts']);
    }
  }

}

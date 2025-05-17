import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../shared/services/login.service';
import { VariableService } from '../../shared/services/variable.service';
import { StorageService } from '../../shared/services/storage.service';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  @ViewChild('navRef', {static: true}) navRef: ElementRef<HTMLElement> = {} as ElementRef;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private loginService: LoginService,
    private vars: VariableService,
    private storageService: StorageService
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
  subs: Subscription[] =  [];
  userData: IUser | null = null;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isHome && this.vars.isBrowser) {
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
    this.checkIsLoggedIn();
  }

  checkIsLoggedIn(): void {
    const userdata: IUser | null = this.storageService.getLocalStorageItem('userdata') ? JSON.parse(this.storageService.getLocalStorageItem('userdata') as string): null;
    if (userdata) {
      this.vars.setUserObs(userdata);
    }
    this.subs.push(this.vars.userObs.subscribe(userData=> {
      if (userData && Object.keys(userData).length > 0) {
        this.loggedIn = true;
        this.userData = userData;
      }
    }));
  }

  handleUserLogin() {
    if (this.loggedIn) {
      this.loginService.userLogout();
    } else {
      this.router.navigate(['accounts']);
    }
  }

  ngOnDestroy() {
    if (this.subs.length >0) {
      this.subs.forEach(sub => {
        sub.unsubscribe();
      })
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';
import { ButtonComponent } from '../../core/button/button.component';
import { DialogComponent } from '../../core/dialog/dialog.component';
import { VariableService } from '../../shared/services/variable.service';
import { IUser } from '../../shared/interfaces/user.interface';
import { IButtonConfig } from '../../shared/interfaces/button.interface';

export interface ILinks {
  icon: string;
  title: string;
  id: number;
  link: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    ButtonComponent,
    MatProgressSpinnerModule,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private vars: VariableService) {}

  downloadCvBtnConfig: IButtonConfig = {};

  socialLinks: ILinks[] = [];

  isHome = false;
  userDetails: any;
  userData: IUser | null = null;

  ngOnInit(): void {
    this.initConfigs();
    this.checkUserLogin();
  }

  checkUserLogin() {
    this.vars.userObs.subscribe((userData) => {
      if (userData && Object.keys(userData).length > 0) {
        this.userData = userData;
        this.socialLinks = userData.social_links.data;
        this.downloadCvBtnConfig = {
          ...this.downloadCvBtnConfig,
          label: 'Download CV',
          bootstrapIconClass: 'bi-download',
        };
      }
    });
  }

  initConfigs() {
    this.downloadCvBtnConfig = {
      label: 'Sign In / Register',
      icon: 'b',
      iconClass: 'pe-1',
      iconPlacement: 'before',
      buttonClass: '',
      bootstrapIconClass: 'bi-door-closed',
      stroked: true,
    };
  }

  handleLoginOrResumeLink() {
    if (this.userData && this.vars.isBrowser) {
      const a = document.createElement('a');
      a.href = this.userData.cv_link;
      a.target = '_blank';
      a.click();
    } else {
      this.redirectToLogin();
    }
  }

  redirectToLogin() {
    this.router.navigate(['/accounts']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/core/button/button.component';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { IButtonConfig } from 'src/app/shared/interfaces/button.interface';
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
  ) {}

  downloadCvBtnConfig: IButtonConfig = {};

  isHome = false;
  userDetails: any;
  
  ngOnInit(): void {
    this.initConfigs();
  }

  initConfigs() {
    this.downloadCvBtnConfig = {
      label: 'Sign In / Register',
      icon: 'b',
      iconClass: 'pe-1', 
      iconPlacement: 'before', 
      buttonClass: '',
      bootstrapIconClass: 'bi-door-closed', 
      stroked: true 
    }
  }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/core/dialog/service/dialog.service';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private cookieService: CookieService
  ) { }

  @ViewChild('dialogRef') dialogRef: TemplateRef<any> | undefined;

  isHome = false;
  userDetails: any;

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userDetails = JSON.parse(this.storageService.getLocalStorageItem('user') as any);
  }

}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/core/dialog/service/dialog.service';
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
    private dialogService: DialogService
  ) { }

  @ViewChild('dialogRef') dialogRef: TemplateRef<any> | undefined;

  isHome = false;
  userDetails: any;

  ngOnInit(): void {
    this.getUserDetails();
    this.isHome = this.router.url === '/';
  }

  getUserDetails() {
    this.userDetails = JSON.parse(this.storageService.getLocalStorageItem('user') as any);
  }

  openDialog(event: any): void {
    this.dialogService.openDialog(this.dialogRef, {
      width: '95%',
      height: '95%',
      panelClass: 'bg-white'
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/common/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(): void {
    this.loggedIn = this.storageService.getLocalStorageItem('user') ? true : false;
    if (!this.loggedIn) {
      this.router.navigate(['accounts']);
    }
  }

  logout() {
    this.storageService.removeLocalStorageItem('user');
    this.router.navigate(['accounts']);
  }

}

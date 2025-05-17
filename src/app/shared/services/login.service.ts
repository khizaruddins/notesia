import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../utils/util.service';
import { VariableService } from './variable.service';
import { EncryptionService } from './encryption.service';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private storageService: StorageService,
    private router: Router,
    private util: UtilService,
    private vars: VariableService,
    private encryptionService: EncryptionService
  ) {}

  async checkUserAndLogin(email: string, password: string) {
    // const { data, error } = await this.apiService.supabase
    //   .from('users')
    //   .select(
    //     `
    //     id,
    //     first_name,
    //     last_name,
    //     username,
    //     email,
    //     phone,
    //     cv_link,
    //     role_id,
    //     password,
    //     avatar,
    //     social_links`
    //   )
    //   .eq('email', email);
    // if (error) {
    //   console.log(error);
    // }
    // if (data && Object.keys(data).length > 0 && this.vars.isBrowser) {
    //   const pass = this.encryptionService.decryptData(data[0].password);
    //   if (pass === password) {
    //     const userData: any = { ...data[0] };
    //     delete userData.password;
    //     this.storageService.setLocalStorageItem(
    //       'userdata',
    //       JSON.stringify(userData)
    //     );
    //     this.vars.setUserObs(userData);
    //     this.cookieService.setCookie('uid', JSON.stringify(userData.id), 7);
    //     this.router.navigate(['/']);
    //   } else {
    //     this.util.openSnackbar('Password does not matched', 'DISMISS');
    //   }
    // } else {
    //   this.util.openSnackbar('User not found! Please signup', 'DISMISS');
    // }
  }

  async checkRegisteredUser(email: string): Promise<boolean> {
    return false;
  }

  async getUserData() {
    return null;
  }

  async userLogout() {
    this.cookieService.deleteCookie('uid');
    this.storageService.removeLocalStorageItem('user');
    this.vars.setUserObs(null);
    this.router.navigate(['accounts']);
  }
}

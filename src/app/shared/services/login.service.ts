import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';
import { UtilService } from '../utils/util.service';
import { VariableService } from './variable.service';
import { EncryptionService } from './encryption.service';
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
    const { data, error } = await this.apiService.supabase.from('users')
      .select(`
        id, 
        first_name, 
        last_name, 
        username, 
        email, 
        phone, 
        cv_link, 
        role_id, 
        password, 
        avatar,
        social_links`)
      .eq('email', email)

    if (error) {
      console.log(error);
    }
    if (data && Object.keys(data).length > 0) {
      const pass = this.encryptionService.decryptData(data[0].password);
      if (pass === password) {
        const userData: any = {...data[0]};
        delete userData.password;
        this.storageService.setLocalStorageItem('userdata', JSON.stringify(userData));
        this.vars.setUserObs(userData);
        this.cookieService.setCookie('uid', JSON.stringify(userData.id), 7);
        this.router.navigate(['/']);
      } else {
        this.util.openSnackbar('Password does not matched', 'DISMISS');
      }
    } else {
      this.util.openSnackbar('User not found! Please signup', 'DISMISS');
    }
  }

  async checkRegisteredUser(email: string): Promise<boolean> {
    const {data, error } = await this.apiService.supabase.from('users')
      .select('id, email')
      .eq('email', email);
    if (data && data.length > 0) {
      return true
    }
    return false;
  }

  async getUserData() {
    const {data, error}: any = await this.apiService.supabase.from('users')
      .select('username, id, email, first_name, last_name, role_id, phone, avatar, cv_link');
      if (data) {
        return data;
      }
    return null;
  }

  async userLogout() {
    this.cookieService.deleteCookie('uid');
    this.storageService.removeLocalStorageItem('user');
    this.vars.setUserObs(null);
    this.router.navigate(['accounts']);
  }
}

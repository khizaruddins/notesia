import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VariableService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  public environment = environment;
  isBrowser: boolean;

  userObs = new BehaviorSubject<IUser | null>(null);

  setUserObs(data: IUser | null) {
    this.userObs.next(data);
  }
}

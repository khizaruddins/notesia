import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class VariableService {
  constructor() {}
  public environment = environment;

  userObs = new BehaviorSubject<IUser | null>(null);

  setUserObs(data: IUser | null) {
    this.userObs.next(data);
  }
}

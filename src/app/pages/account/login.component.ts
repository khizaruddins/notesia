import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/shared/utils/form-validators.service';
import { FORM_INFO } from '../../shared/constants/form-info';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { environment } from 'src/environments/environment';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from 'src/app/core/input/input.component';
import { ButtonComponent } from 'src/app/core/button/button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IButtonConfig } from 'src/app/shared/interfaces/button.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    MatFormFieldModule
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private fv: FormValidators,
    private storageService: StorageService,
    private router: Router,
    private utilService: UtilService,
    private cookieService: CookieService
  ) { }

  firestore: Firestore = inject(Firestore);

  formInfo = FORM_INFO;
  isLoginOrSignup = 'login';
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.email.pattern)]],
    password: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.password.pattern)]]
  });
  signupForm: FormGroup = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3)]],
    lname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.email.pattern)]],
    mob: ['', [Validators.required, Validators.pattern(/[\d]{10}$/)]],
    password: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.password.pattern)]],
    repassword: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.password.pattern)]]
  }, {
    validator: this.fv.matchPassword('password', 'repassword')
  });
  step = 1;

  private DOMAIN_URL = environment.APP.DOMAIN_URL;
  loginBtnConfig: IButtonConfig = {};
  nextBtnConfig: IButtonConfig = {};
  signupBtnConfig: IButtonConfig = {};


  ngOnInit(): void {
    this.isLoggedIn();
    this.initializeConfigs();
    this.initializeFirebase();
  }

  initializeConfigs() {
    this.loginBtnConfig = {
      label: 'Login',
      stroked: true,
      buttonClass: 'theme-inverse-btn',
      type: 'submit'
    }
    this.nextBtnConfig = {
      label: 'Next',
      stroked: true,
      buttonClass: 'theme-inverse-btn',
      type: 'button'
    }
    this.signupBtnConfig = {
      label: 'Signup',
      stroked: true,
      buttonClass: 'theme-inverse-btn',
      type: 'submit'
    }
  }

  initializeFirebase() {
    const itemCollection = collection(this.firestore, 'users');
    const value = collectionData(itemCollection);
      value.subscribe(val => {
        console.log(val);
    })
  }

  isLoggedIn() {
    if (this.cookieService.getCookie('uid')) {
      this.utilService.openSnackbarDuration('Already Logged in', 'DISMISS', 3000);
      this.router.navigate(['/']);
    }
  }

  toggleSignupForm(): void {
    this.step = this.step == 1 ? 2 : 1;
  }

  onSuffixIconClick(event: any, choice: string, passRepass?: string): void {
    switch (choice) {
      case 'loginForm':
        this.formInfo.loginForm.password.type = event.target.textContent === 'visibility' ? 'password' : 'text';
        this.formInfo.loginForm.password.matSuffixIcon = event.target.textContent === 'visibility' ? 'visibility_off' : 'visibility';
        break;
      case 'signupForm':
        if (passRepass === 'pass') {
          this.formInfo.signupForm.password.type = event.target.textContent === 'visibility' ? 'password' : 'text';
          this.formInfo.signupForm.password.matSuffixIcon = event.target.textContent === 'visibility' ? 'visibility_off' : 'visibility';
        } else if (passRepass === 'repass') {
          this.formInfo.signupForm.repassword.type = event.target.textContent === 'visibility' ? 'password' : 'text';
          this.formInfo.signupForm.repassword.matSuffixIcon = event.target.textContent === 'visibility' ? 'visibility_off' : 'visibility';
        }
        break;
      default:
    }
  }

  toggleForm(): void {
    this.loginForm.reset();
    this.signupForm.reset();
    this.isLoginOrSignup = this.isLoginOrSignup === 'login' ? 'signup' : 'login';
  }

  submitForm(formName: string): void {
    // submit form to backend
    switch (formName) {
      case 'login':
        if (this.loginForm.valid) {
          this.loginFlow();
        } else {
          this.loginForm.markAllAsTouched();
        }
        break;
      case 'signup':
        if (this.signupForm.valid) {
          this.checkRegisteredUser();
        } else {
          this.signupForm.markAllAsTouched();
        }
        break;
      default:
    }
  }

  loginFlow() {
    let email = this.loginForm.get('email')?.value;
    let password = btoa(this.loginForm.get('password')?.value);
    // const dbEmail = collection(this.firestore, 'users', (ref: any) => ref.where('email', '==', email));
    // dbEmail.valueChanges({ idField: 'userId' }).subscribe((dbValue: any) => {
    //   if (dbValue.length > 0) {
    //     if (dbValue[0].password === password) {
    //       delete dbValue[0].password;
    //       const data = JSON.stringify(dbValue[0]);
    //       this.storageService.setLocalStorageItem('user', data);
    //       const domain = this.DOMAIN_URL === 'http://localhost:4200' ? 'localhost': 'notasia';
    //       this.cookieService.setCookie('uid', dbValue[0].userId, 3);
    //       this.router.navigate(['/']);
    //     } else {
    //       this.utilService.openSnackbarDuration('Your password is incorrect', 'DISMISS', 3000);
    //     }
    //   } else {
    //     this.utilService.openSnackbarDuration('Your email is incorrect or you are not registered', 'DISMISS', 3000);
    //   }
    // }, (error: any) => {
    //   console.error(error.message);
    //   this.utilService.openSnackbarDuration('Something went wrong', 'DISMISS', 3000);
    // });
  }

  checkRegisteredUser() {
    let email = this.signupForm.get('email')?.value;
    // const dbEmail = this.db.collection('users', (ref: any) => ref.where('email', '==', email));
    // dbEmail.valueChanges({ idField: 'userId' }).subscribe((dbValue: any) => {
    //   if (dbValue.length > 0) {
    //     this.utilService.openSnackbarDuration('Already registered Please Login', 'DISMISS', 3000);
    //     this.isLoginOrSignup = 'login';
    //     this.step = 1;
    //   } else {
    //     this.signupFlow();
    //   }
    // });
  }

  signupFlow() {
    let data = { ...this.signupForm.value };
    let userId, value;
    data.password = btoa(this.signupForm.get('password')?.value);
    delete data.repassword;
    data.isAdmin = false;
    try {
      // this.db.collection('users').add(data).then((dataValue: any) => {
      //   userId = dataValue.id;
      //   data.userId = userId;

      //   delete data.password;
      //   value = JSON.stringify(data);

      //   this.signupForm.reset();
      //   this.storageService.setLocalStorageItem('user', value);
      //   this.router.navigate(['/']);
      // }, (error: any) => {
      //   this.utilService.openSnackbar("Something went wrong", "DISMISS");
      // });
    } catch (e) {
      console.error(e);
    }
  }

}

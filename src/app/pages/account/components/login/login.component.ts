import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/services/custom-validators.service';
import { FORM_INFO } from './form-info';
import { LoginService } from './login.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private cv: CustomValidators,
    private db: AngularFirestore,
    private storageService: StorageService,
    private router: Router,
    private utilService: UtilService
  ) { }
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
    validator: this.cv.matchPassword('password', 'repassword')
  });
  step = 1;

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    if (this.storageService.getLocalStorageItem('user')) {
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
    }
  }

  loginFlow() {
    let email = this.loginForm.get('email')?.value;
    let password = btoa(this.loginForm.get('password')?.value);
    const dbEmail = this.db.collection('users', ref => ref.where('email', '==', email));
    dbEmail.valueChanges({ idField: 'userId' }).subscribe((dbValue: any) => {
      if (dbValue.length > 0) {
        if (dbValue[0].password === password) {
          delete dbValue[0].password;
          const data = JSON.stringify(dbValue[0]);
          this.storageService.setLocalStorageItem('user', data);
          this.router.navigate(['/']);
        } else {
          this.utilService.openSnackbarDuration('Your password is incorrect', 'DISMISS', 3000);
        }
      } else {
        this.utilService.openSnackbarDuration('Your email is incorrect or you are not registered', 'DISMISS', 3000);
      }
    }, error => {
      console.error(error.message);
      this.utilService.openSnackbarDuration('Something went wrong', 'DISMISS', 3000);
    });
  }

  checkRegisteredUser() {
    let email = this.signupForm.get('email')?.value;
    const dbEmail = this.db.collection('users', ref => ref.where('email', '==', email));
    dbEmail.valueChanges({ idField: 'userId' }).subscribe((dbValue: any) => {
      if (dbValue.length > 0) {
        this.utilService.openSnackbarDuration('Already registered Please Login', 'DISMISS', 3000);
        this.isLoginOrSignup = 'login';
        this.step = 1;
      } else {
        this.signupFlow();
      }
    });
  }

  signupFlow() {
    let data = { ...this.signupForm.value };
    let userId, value;
    data.password = btoa(this.signupForm.get('password')?.value);
    delete data.repassword;
    data.isAdmin = false;
    try {
      this.db.collection('users').add(data).then(dataValue => {
        userId = dataValue.id;
        data.userId = userId;

        delete data.password;
        value = JSON.stringify(data);

        this.signupForm.reset();
        this.storageService.setLocalStorageItem('user', value);
        this.router.navigate(['/']);
      }, error => {
        this.utilService.openSnackbar("Something went wrong", "DISMISS");
      });
    } catch (e) {
      console.log(e);
    }
  }

}

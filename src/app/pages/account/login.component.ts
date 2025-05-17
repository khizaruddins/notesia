import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FORM_INFO } from '../../shared/constants/form-info';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from '../../core/input/input.component';
import { ButtonComponent } from '../../core/button/button.component';
import { FormValidators } from '../../shared/utils/form-validators.service';
import { UtilService } from '../../shared/utils/util.service';
import { CookieService } from '../../shared/services/cookie.service';
import { LoginService } from '../../shared/services/login.service';
import { EncryptionService } from '../../shared/services/encryption.service';
import { IButtonConfig } from '../../shared/interfaces/button.interface';
import { IInputConfig } from '../../shared/interfaces/input.interface';


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
    private router: Router,
    private utilService: UtilService,
    private cookieService: CookieService,
    private loginService: LoginService,
    private encryptionService: EncryptionService
  ) { }


  formInfo = FORM_INFO;
  isLoginOrSignup = 'login';
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  step = 1;

  // private DOMAIN_URL = environment.APP.DOMAIN_URL;
  loginBtnConfig: IButtonConfig = {};
  nextBtnConfig: IButtonConfig = {};
  signupBtnConfig: IButtonConfig = {};
  prevBtnConfig: IButtonConfig = {};

  emailInputConfig: IInputConfig = {} as IInputConfig;
  passwordInputConfig: IInputConfig = {} as IInputConfig;
  fNameInputConfig: IInputConfig = {} as IInputConfig;
  lNameInputConfig: IInputConfig = {} as IInputConfig;
  mobInputConfig: IInputConfig = {} as IInputConfig;
  emailSignupInputConfig: IInputConfig = {} as IInputConfig;
  passwordSignupInputConfig: IInputConfig = {} as IInputConfig;
  rePasswordInputConfig: IInputConfig = {} as IInputConfig;
  usersList = [];


  ngOnInit(): void {
    this.initForm();
    this.isLoggedIn();
    this.initBtnConfigs();
    this.initInputConfigs();
  }

  initForm() {
   this.signupForm =  this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.email.pattern)]],
      phone: ['', [Validators.required, Validators.pattern(/[\d]{10}$/)]],
      password: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.password.pattern)]],
      repassword: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.password.pattern)]]
    }, { validator: this.fv.matchPassword('password', 'repassword') });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.email.pattern)]],
      password: ['', [Validators.required, Validators.pattern(this.formInfo.loginForm.password.pattern)]]
    });
  }

  initInputConfigs() {
    this.emailInputConfig = {
      label: this.formInfo.loginForm.email.label,
      placeholder: this.formInfo.loginForm.email.placeholder,
      appearance: this.formInfo.loginForm.email.appearance,
      type: this.formInfo.loginForm.email.type,
      errors: this.formInfo.loginForm.email.errors,
      hint: this.formInfo.loginForm.email.hint,
      classes: this.formInfo.loginForm.email.classes,
    }

    this.passwordInputConfig = {
      label: this.formInfo.loginForm.password.label,
      placeholder: this.formInfo.loginForm.password.placeholder,
      appearance: this.formInfo.loginForm.password.appearance,
      type: this.formInfo.loginForm.password.type,
      errors: this.formInfo.loginForm.password.errors,
      hint: this.formInfo.loginForm.password.hint,
      classes: this.formInfo.loginForm.password.classes,
      matSuffixIcon: this.formInfo.loginForm.password.matSuffixIcon,
    }

    this.fNameInputConfig = {
      label: this.formInfo.signupForm.first_name.label,
      placeholder: this.formInfo.signupForm.first_name.placeholder,
      appearance: this.formInfo.signupForm.first_name.appearance,
      type: this.formInfo.signupForm.first_name.type,
      errors: this.formInfo.signupForm.first_name.errors,
      hint: this.formInfo.signupForm.first_name.hint,
      classes: this.formInfo.signupForm.first_name.classes,
    }

    this.lNameInputConfig = {
      label: this.formInfo.signupForm.last_name.label,
      placeholder: this.formInfo.signupForm.last_name.placeholder,
      appearance: this.formInfo.signupForm.last_name.appearance,
      type: this.formInfo.signupForm.last_name.type,
      errors: this.formInfo.signupForm.last_name.errors,
      hint: this.formInfo.signupForm.last_name.hint,
      classes: this.formInfo.signupForm.last_name.classes,
    }

    this.mobInputConfig = {
      label: this.formInfo.signupForm.phone.label,
      placeholder: this.formInfo.signupForm.phone.placeholder,
      appearance: this.formInfo.signupForm.phone.appearance,
      type: this.formInfo.signupForm.phone.type,
      errors: this.formInfo.signupForm.phone.errors,
      hint: this.formInfo.signupForm.phone.hint,
      classes: this.formInfo.signupForm.phone.classes,
    }

    this.emailSignupInputConfig = {
      label: this.formInfo.signupForm.email.label,
      placeholder: this.formInfo.signupForm.email.placeholder,
      appearance: this.formInfo.signupForm.email.appearance,
      type: this.formInfo.signupForm.email.type,
      errors: this.formInfo.signupForm.email.errors,
      hint: this.formInfo.signupForm.email.hint,
      classes: this.formInfo.signupForm.email.classes,
    }

    this.passwordSignupInputConfig = {
        label: this.formInfo.signupForm.password.label,
        placeholder: this.formInfo.signupForm.password.placeholder,
        appearance: this.formInfo.signupForm.password.appearance,
        type: this.formInfo.signupForm.password.type,
        errors: this.formInfo.signupForm.password.errors,
        hint: this.formInfo.signupForm.password.hint,
        classes: this.formInfo.signupForm.password.classes,
        matSuffixIcon: this.formInfo.signupForm.password.matSuffixIcon,
    }

    this.rePasswordInputConfig = {
      label: this.formInfo.signupForm.repassword.label,
      placeholder: this.formInfo.signupForm.repassword.placeholder,
      appearance: this.formInfo.signupForm.repassword.appearance,
      type: this.formInfo.signupForm.repassword.type,
      errors: this.formInfo.signupForm.repassword.errors,
      hint: this.formInfo.signupForm.repassword.hint,
      classes: this.formInfo.signupForm.repassword.classes,
      matSuffixIcon: this.formInfo.signupForm.repassword.matSuffixIcon,
    }
  }
  initBtnConfigs() {
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
    this.prevBtnConfig = {
      icon: 'm',
      matIcon: 'arrow_back',
      iconPlacement: 'before',
      label: 'Prev',
      iconClass: '',
      stroked: true,
      buttonClass: 'prev-btn theme-inverse-btn',
      type: 'button'
    }
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
        this.passwordInputConfig.type = this.formInfo.loginForm.password.type;
        this.passwordInputConfig.matSuffixIcon = this.formInfo.loginForm.password.matSuffixIcon;
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
    this.loginForm?.reset();
    this.signupForm?.reset();
    this.isLoginOrSignup = this.isLoginOrSignup === 'login' ? 'signup' : 'login';
  }

  submitForm(formName: string): void {
    // submit form to backend
    switch (formName) {
      case 'login':
        if (this.loginForm?.valid) {
          this.loginFlow();
        } else {
          this.loginForm?.markAllAsTouched();
        }
        break;
      case 'signup':
        if (this.signupForm?.valid) {
          this.checkRegisteredUser();
        } else {
          this.signupForm?.markAllAsTouched();
        }
        break;
      default:
    }
  }

  loginFlow() {
    const email = this.loginForm?.get('email')?.value;
    this.loginService.checkUserAndLogin(email, this.loginForm?.get('password')?.value);
  }

  checkRegisteredUser() {
    let email = this.signupForm?.get('email')?.value;
    this.loginService.checkRegisteredUser(email).then((val: any) => {
      if (val) {
        this.utilService.openSnackbar('You are already registered, Please Login', 'DISMISS');
        this.step = 1;
      }
    })
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
    let data = { ...this.signupForm?.value };
    data.password = this.encryptionService.encryptData(this.signupForm?.get('password')?.value);
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

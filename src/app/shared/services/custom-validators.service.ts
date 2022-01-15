import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
 export class CustomValidators {
  //  keep creating functions and use them
  matchPassword(firstControl: any, secondControl: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
       const password = control.get(firstControl)?.value;
       const confirm = control.get(secondControl)?.value;
       if (password !== confirm) { return { noMatch: true } }
       return null;
     }
  }
 }
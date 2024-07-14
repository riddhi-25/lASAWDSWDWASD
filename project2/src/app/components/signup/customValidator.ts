import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function patternValidator(regex: RegExp, error: { [key: string]: any }): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

export function comparePassword(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : { mismatch: true };
  }
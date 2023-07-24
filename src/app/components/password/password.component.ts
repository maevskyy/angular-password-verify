import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { EStrength } from 'src/app/types/password-input';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent implements ControlValueAccessor {
  userData: FormGroup;
  passwordStrength: EStrength = EStrength.NoLetters;
  inputType:string = 'password'
  showPassword = false;

  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {
    this.userData = fb.group({
      password: ''
    });
  }

  toggleVisibility() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  //? CVA part, i have a lot of questions..
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.userData.get('password')?.setValue(value);
    this.validatePasswordStrength(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onPasswordChange(): void {
    const passwordValue = this.userData.get('password')?.value;
    this.validatePasswordStrength(passwordValue);
    this.onChange(passwordValue);
    this.onTouched();
  }

  validatePasswordStrength(password: string): void {
    this.passwordStrength = this.passwordStrengthService.validation(password);
  }
}

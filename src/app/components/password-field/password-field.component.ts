import { Component } from '@angular/core';

enum EStrength {
  NoLetters = 'noLetters',
  LessThanEight = 'lessThanEight',
  Weak = 'weak',
  Medium = 'medium',
  Strong = 'strong',
}

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
})
export class PasswordFieldComponent {
  userPassword = '';
  inputType: string = 'password';
  showPassword = false;
  passwordStrength = EStrength.NoLetters;
  EStrength = EStrength;

  toggleVisibility() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  validation() {
    if (this.userPassword === '') {
      this.passwordStrength = EStrength.NoLetters;
    } 
    else if (this.userPassword.length < 8) {
      this.passwordStrength = EStrength.LessThanEight;
    }
    else{
      const hasLetters = /[a-zA-Z]|[а-яА-ЯіІїЇєЄ]/.test(this.userPassword);
      const hasDigits = /\d/.test(this.userPassword);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=]/.test(this.userPassword);
      this.passwordStrength = EStrength.Weak
      if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.passwordStrength = EStrength.Medium
      }
      if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrength = EStrength.Strong
      }
      
    }
  }
}

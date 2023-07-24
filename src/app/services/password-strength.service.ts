import { Injectable } from '@angular/core';
import { EStrength } from '../types/password-input';

@Injectable({
  providedIn: 'root',
})

export class PasswordStrengthService {
  validation(password: string): EStrength {
    if (password === '') {
      return EStrength.NoLetters;
    }
  
    const hasLetters = /[a-zA-Z]|[а-яА-ЯіІїЇєЄ]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=]/.test(password);
  
    if (password.length < 8) {
      return EStrength.LessThanEight;
    }
  
    if (hasLetters && hasDigits && hasSymbols) {
      return EStrength.Strong;
    }
  
    if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
      return EStrength.Medium;
    }

    return EStrength.Weak;
  }
}

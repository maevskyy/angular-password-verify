import { Component, Input, OnChanges } from '@angular/core';
import { EStrength } from 'src/app/types/password-input';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html'
})
export class PasswordStrengthComponent implements OnChanges {

  @Input() strength!: EStrength;
  EStrength = EStrength;

  colorsBlock: string[] = ['bg-white', 'bg-white', 'bg-white'];

  ngOnChanges() {
    this.setColors();
  }

  setColors() {
    if (this.strength === EStrength.NoLetters) {
      this.colorsBlock = ['bg-white', 'bg-white', 'bg-white'];
    } 
    if (this.strength === EStrength.LessThanEight) {
      this.colorsBlock = ['bg-red-300', 'bg-red-300', 'bg-red-300'];
    }
    if (this.strength === EStrength.Weak) {
      this.colorsBlock = ['bg-red-300', 'bg-white', 'bg-white'];
    }
    if (this.strength === EStrength.Medium) {
      this.colorsBlock = ['bg-yellow-300', 'bg-yellow-300', 'bg-white'];
    }
    if (this.strength === EStrength.Strong) {
      this.colorsBlock = ['bg-green-300', 'bg-green-300', 'bg-green-300'];
    }
  }
}

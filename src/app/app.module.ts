import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasswordComponent } from './components/password/password.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
;


@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PasswordStrengthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component } from '@angular/core';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {NewPasswordComponent} from './new-password/new-password.component';
import {OtpVerificationComponent} from './otp-verification/otp-verification.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [
    ForgotPasswordComponent,
    NewPasswordComponent,
    OtpVerificationComponent,
    CreateAccountComponent,
    LoginComponent
  ],
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}

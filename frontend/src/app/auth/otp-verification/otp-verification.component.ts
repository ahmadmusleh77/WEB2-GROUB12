import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class OtpVerificationComponent {
  otpForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.otpForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  sendCode() {
    if (this.otpForm.valid) {
      const code = this.otpForm.value.code;
      console.log('Sending OTP code:', code);

    }
  }
}

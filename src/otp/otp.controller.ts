// src/otp/otp.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('send')
  async sendOtp(@Body('email') email: string) {
    const otp = this.otpService.generateOtp();
    await this.otpService.sendOtp(email, otp);
    return { message: 'OTP sent successfully' };
  }
}

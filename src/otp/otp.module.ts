// src/otp/otp.module.ts
import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OtpController } from './otp.controller';

@Module({
  providers: [OtpService],
  controllers: [OtpController],
})
export class OtpModule {}
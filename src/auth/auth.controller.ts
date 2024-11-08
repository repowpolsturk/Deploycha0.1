import { Controller, Post, Body, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SignInDto } from './dto/sing-in.dto';
import { Public } from './public.decorator';
import { SignUpDto } from './dto/sing-up.dto';

@ApiTags('auth')
@Controller('auth')
@UseGuards(JwtAuthGuard) // Применяем JwtAuthGuard ко всем эндпоинтам контроллера по умолчанию
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public() // Эндпоинт публичный, доступен без токена
  @ApiOperation({ summary: 'User registration' })
  @ApiResponse({ status: 201, description: 'The user has been successfully registered.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.register(signUpDto);
  }

  @Public() // Эндпоинт публичный, доступен без токена
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'The user has been successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    const user = await this.authService.validateUser(signInDto.email, signInDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @ApiBearerAuth() // Эндпоинт требует авторизации с использованием токена
  @ApiOperation({ summary: 'User logout' })
  @ApiResponse({ status: 200, description: 'The user has been successfully logged out.' })
  @Post('logout')
  async logout() {
    return this.authService.logout();
  }

  @Public() // Эндпоинт публичный, доступен без токена
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({ status: 200, description: 'New access token has been issued.' })
  @ApiResponse({ status: 401, description: 'Invalid refresh token.' })
  @ApiBody({ schema: { example: { refresh_token: 'your-refresh-token' } } })
  @Post('refresh')
  async refreshToken(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshAccessToken(refreshToken);
  }
}
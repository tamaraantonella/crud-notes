import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Auth } from './decorators/auth.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Role } from './enums/role.enum';
import { AuthService } from './services/auth.service';
import { UpdateUserDto } from '@users/dto/update-user.dto';

interface RequestWithUser extends Request {
	[x: string]: any;
	email: string;
	role: string;
}
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('register')
	async register(@Body() registerDto: RegisterDto) {
		console.log("🚀 ~ file: auth.controller.ts:21 ~ AuthController ~ register ~ registerDto:", registerDto)
		this.authService.register(registerDto);
	}

	@Post('login')
	async login(@Body() loginDto: LoginDto) {
		return this.authService.login(loginDto);
	}

	@Get('me')
	@Auth(Role.USER)
	profile(@Req() req: RequestWithUser) {
		return this.authService.getUserProfile(req.email);
	}

	@Post('user')
	@Auth(Role.ADMIN)
	modifyUser(
		@Query('id') id: string,
		@Body() updateUserDto: UpdateUserDto) {
		return this.authService.updateUser(id, updateUserDto);
	 }
}

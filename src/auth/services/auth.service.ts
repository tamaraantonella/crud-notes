import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common';
import { UsersService } from '@users/users.service';
import { RegisterDto } from '../dto/register.dto';
import { PasswordService } from './password.service';
import { LoginDto } from '@auth/dto/login.dto';
import { JwtTokenService } from './jwt.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly passwordService: PasswordService,
		private readonly jwtTokenService: JwtTokenService
	) {}

	async register({ email, name, password }: RegisterDto) {
		const existingUser = await this.usersService.findOneByEmail(email);
		if (existingUser) {
			throw new BadRequestException('User already exists');
		}
		const hashedPassword = await this.passwordService.hashPassword(password);

		await this.usersService.create({ name, email, password: hashedPassword });
	}

	async login({ email, password }: LoginDto) {
		const user = await this.usersService.findOneByEmail(email);
		if (!user) {
			throw new NotFoundException('Email not found');
		}
		const isPasswordValid = await this.passwordService.isPasswordValid(
			password,
			user.password
		);

		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid password');
		}

		const token = await this.jwtTokenService.generateJWTToken(email, user.id);

		return { token, email: user.email, name: user.name };
	}
}

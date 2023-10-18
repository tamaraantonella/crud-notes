import { LoginDto } from '@auth/dto/login.dto';
import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common';
import { UpdateUserDto } from '@users/dto/update-user.dto';
import { UsersService } from '@users/users.service';
import { formatISO } from 'date-fns';
import { RegisterDto } from '../dto/register.dto';
import { JwtTokenService } from './jwt.service';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly passwordService: PasswordService,
		private readonly jwtTokenService: JwtTokenService
	) {}

	async register({ email, password, ...data }: RegisterDto) {
		const existingUser = await this.usersService.findOneByEmail(email);
		if (existingUser) {
			throw new BadRequestException('User already exists');
		}
		const hashedPassword = await this.passwordService.hashPassword(password);
		await this.usersService.create({
			...data,
			email,
			password: hashedPassword
		});
		return { email };
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

		const token = await this.jwtTokenService.generateJWTToken(
			email,
			user.id,
			user.role
		);

		return { token, email: user.email, name: user.name };
	}

	async getUserProfile(email: string) {
		const user = await this.usersService.findOneByEmail(email);
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			created: formatISO(user.createdAt)
		};
	}

	async updateUser(id: string, userData: UpdateUserDto) {
		const userToUpdate = await this.usersService.findById(id);
		if (!userToUpdate) {
			throw new NotFoundException('User not found');
		}
		await this.usersService.update(id, userData);
	}
}

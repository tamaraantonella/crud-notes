import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
	private secretKey: string;
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService
	) {
		this.secretKey = this.configService.get<string>('auth.jwtSecret');
	}

	async generateJWTToken(email: string, userId: string, role:string) {
		return this.jwtService.signAsync({ email, userId, role });
	}

	async isValidToken(token: string) {
		const verifiedToken = await this.jwtService.verifyAsync(token, {
			secret: this.secretKey
		});
		return verifiedToken;
	}
}

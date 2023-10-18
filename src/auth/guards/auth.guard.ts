import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common';
import { Request } from 'express';
import { JwtTokenService } from '../services/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly jwtTokenService: JwtTokenService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req: Request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(req.headers.authorization);
		if (!token) {
			new UnauthorizedException();
		}
		try {
			const payload = await this.jwtTokenService.isValidToken(token);
			req['user'] = payload;
		} catch (error) {
			throw new UnauthorizedException();
		}
		return true;
	}

	private extractTokenFromHeader(header: string | undefined): string | null {
		const [type, token] = header?.split(' ') ?? [];
		return type === 'Bearer' && token ? token : null;
	}
}

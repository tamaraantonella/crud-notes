import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { JwtTokenService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		UsersModule,
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			global: true,
			useFactory: (configService: ConfigService) => ({
				secret: configService.get<string>('auth.jwtSecret'),
				signOptions: { expiresIn: '60s' }
			})
		})
	],
	controllers: [AuthController],
	providers: [AuthService, PasswordService, JwtTokenService],
	exports: [JwtTokenService]
})
export class AuthModule {}

import { AuthModule } from '@auth/auth.module';
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { NotesModule } from '@notes/notes.module';
import { UsersModule } from '@users/users.module';
import { ZodValidationPipe } from 'nestjs-zod';

import configModuleBootstrapper from './bootstrappers/config-module.bootstrapper';
import typeormModuleBootstrapper from './bootstrappers/typeorm-module.bootstrapper';
@Module({
	imports: [
		configModuleBootstrapper(),
		typeormModuleBootstrapper(),
		NotesModule,
		UsersModule,
		AuthModule
	],
	providers: [{ provide: APP_PIPE, useClass: ZodValidationPipe }]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';

import configModuleBootstrapper from './bootstrappers/config-module.bootstrapper';
import typeormModuleBootstrapper from './bootstrappers/typeorm-module.bootstrapper';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
	imports: [
		configModuleBootstrapper(),
		typeormModuleBootstrapper(),
		NotesModule
	],
	providers: [{ provide: APP_PIPE, useClass: ZodValidationPipe }]
})
export class AppModule {}

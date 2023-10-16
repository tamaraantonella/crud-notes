import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

import configModuleBootstrapper from './bootstrappers/config-module.bootstrapper';
import typeormModuleBootstrapper from './bootstrappers/typeorm-module.bootstrapper';

@Module({
	imports: [
		configModuleBootstrapper(),
		typeormModuleBootstrapper(),
		NotesModule
	],
	providers: [AppService]
})
export class AppModule {}

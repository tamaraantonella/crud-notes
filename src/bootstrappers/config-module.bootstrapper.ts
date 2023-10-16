import configuration from '@config/configuration';
import { ConfigModule } from '@nestjs/config';

export default () =>
	ConfigModule.forRoot({
		envFilePath: '.env',
		isGlobal: true,
		load: [configuration]
	});

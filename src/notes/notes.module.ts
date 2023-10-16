import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { UsersModule } from '@users/users.module';
import { UsersService } from '@users/users.service';
import { AuthModule } from '@auth/auth.module';
import { JwtTokenService } from '@auth/services/jwt.service';

@Module({
	imports: [TypeOrmModule.forFeature([Note]), UsersModule, AuthModule],
	controllers: [NotesController],
	providers: [NotesService, UsersService, JwtTokenService]
})
export class NotesModule {}

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [NotesModule],
  providers: [AppService],
})
export class AppModule {}

import { AuthGuard } from '@auth/guards/auth.guard';
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UseGuards
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@ApiTags('notes')
@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
	constructor(private readonly notesService: NotesService) {}

	@Post()
	create(@Body() createNoteDto: CreateNoteDto) {
		return this.notesService.create(createNoteDto);
	}

	@Get()
	findAll() {
		return this.notesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.notesService.findOne(id);
	}

	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateNoteDto: UpdateNoteDto
	) {
		return this.notesService.update(+id, updateNoteDto);
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.notesService.remove(+id);
	}
}

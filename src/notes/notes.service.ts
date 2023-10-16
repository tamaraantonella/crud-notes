import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
	constructor(
		@InjectRepository(Note) private readonly noteRepository: Repository<Note>,
		@InjectRepository(User) private readonly userRepository: Repository<User>
	) {}

	async create(createNoteDto: CreateNoteDto) {
		const newNote = this.noteRepository.create(createNoteDto);
		await this.noteRepository.save(newNote);
	}

	findAll() {
		return this.noteRepository.find();
	}

	findOne(id: number) {
		return this.noteRepository.findOneBy({ id });
	}

	update(id: number, updateNoteDto: UpdateNoteDto) {
		return this.noteRepository.update(id, updateNoteDto);
	}

	remove(id: number) {
		return this.noteRepository.softDelete(id);
	}
}

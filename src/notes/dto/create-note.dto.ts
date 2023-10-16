import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateNoteSchema = z.object({
	title: z.string().min(3).max(255),
	content: z.string().min(3).max(255),
	createdBy: z.string().uuid()
});

export class CreateNoteDto extends createZodDto(CreateNoteSchema) {}

import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const RegisterSchema = z.object({
	name: z.string().trim().min(3).max(255),
	email: z.string().trim().email(),
	password: z.string().min(6).max(25)
});

export class RegisterDto extends createZodDto(RegisterSchema) {}

import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const CreateUserSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(3).max(255),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) { };

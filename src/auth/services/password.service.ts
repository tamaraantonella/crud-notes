import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
	constructor() {}

	hashPassword(password: string) {
		return hash(password, 10);
	}

	isPasswordValid(password: string, hashedPassword: string) {
		return compare(password, hashedPassword);
	}
}

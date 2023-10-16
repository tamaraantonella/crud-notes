import { User } from '@users/entities/user.entity';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Note {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	content: string;

	@Column()
	createdBy: string;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@ManyToOne(() => User, (user) => user.id, { eager: true })
	user: User;
}

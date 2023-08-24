import type { InferSelectModel } from 'drizzle-orm';
import { sqliteTable, integer, text, numeric } from 'drizzle-orm/sqlite-core';

export const roommates = sqliteTable('roommates', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull()
});

export const chores = sqliteTable('chores', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	points: integer('points').notNull()
});

export const choreRecords = sqliteTable('chore_records', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	choreId: integer('chore_id')
		.notNull()
		.references(() => chores.id),
	roommateId: integer('roommate_id')
		.notNull()
		.references(() => roommates.id),
	completedAt: integer('completed_at').notNull()
});

export type Chore = InferSelectModel<typeof chores>;
export type ChoreRecord = InferSelectModel<typeof choreRecords>;
export type Roommate = InferSelectModel<typeof roommates>;

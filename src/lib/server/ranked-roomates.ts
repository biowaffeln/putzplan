import { db } from './db';
import { choreRecords, chores, roommates } from './schema';
import { desc, sql, eq, and, gt } from 'drizzle-orm';

export function getRoommatesRanked(startDate?: Date) {
	return db
		.select({
			id: roommates.id,
			name: roommates.name,
			totalPoints: sql<number>`total(${chores.points})`,
			totalChores: sql<number>`count(${choreRecords.id})`
		})
		.from(roommates)
		.leftJoin(
			choreRecords,
			and(
				eq(roommates.id, choreRecords.roommateId),
				startDate ? gt(choreRecords.completedAt, startDate.getTime()) : undefined
			)
		)
		.leftJoin(chores, eq(choreRecords.choreId, chores.id))
		.groupBy(({ id }) => id)
		.orderBy(({ totalPoints, totalChores }) => [desc(totalPoints), desc(totalChores)])
		.all();
}

export type RoommateRanked = ReturnType<typeof getRoommatesRanked>[number];

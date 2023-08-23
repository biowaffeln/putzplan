import { db } from './db';
import type { Chore, Roommate } from './schema';

export function getRoommates() {
	return db.prepare('SELECT * FROM roommates').all() as Roommate[];
}

export function getChores() {
	return db.prepare('SELECT * FROM chores ORDER BY points ASC').all() as Chore[];
}

type RecordData = {
	roommateId: number;
	choreId: number;
	completedAt: number;
};

export function addChoreRecord({ roommateId, choreId, completedAt: completedDate }: RecordData) {
	return db
		.prepare('INSERT INTO chore_records (roommate_id, chore_id, completed_at) VALUES (?, ?, ?)')
		.run(roommateId, choreId, completedDate);
}

export function getRoommatesRanked(startDate?: Date) {
	const startDateCondition = startDate ? `AND completed_at >= '${startDate.getTime()}'` : '';

	const sql = `
    SELECT r.id, r.name, IFNULL(SUM(c.points), 0) as total_points, COUNT(cr.id) as total_chores
    FROM roommates r
    LEFT JOIN chore_records cr ON r.id = cr.roommate_id ${startDateCondition}
    LEFT JOIN chores c ON cr.chore_id = c.id
    GROUP BY r.id, r.name
    ORDER BY total_points DESC, total_chores DESC
  `;

	const res = db.prepare(sql).all() as (Roommate & {
		total_points: number;
		total_chores: number;
	})[];
	return res;
}

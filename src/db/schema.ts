export const roommateSchema = `
CREATE TABLE IF NOT EXISTS roommates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
)
`;
export const choreSchema = `
CREATE TABLE IF NOT EXISTS chores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  points INTEGER NOT NULL
)
`;
export const choreRecordSchema = `
CREATE TABLE IF NOT EXISTS chore_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chore_id INTEGER NOT NULL,
  roommate_id INTEGER NOT NULL,
  completed_at DATETIME NOT NULL,
  FOREIGN KEY (chore_id) REFERENCES chores (id),
  FOREIGN KEY (roommate_id) REFERENCES roommates (id)
)
`;

export type Roommate = {
	id: number;
	name: string;
};

export type Chore = {
	id: number;
	name: string;
	points: number;
};

export type ChoreRecord = {
	id: number;
	chore_id: number;
	roommate_id: number;
	completed_at: string;
};

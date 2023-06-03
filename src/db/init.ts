import { db } from './db';
import { roommateSchema, choreSchema, choreRecordSchema } from './schema';

const sampleRoommates = ['Amanda', 'Bobby', 'Carly'];
const sampleChores = [
	{ name: 'Clean kitchen', points: 5 },
	{ name: 'Clean bathroom', points: 5 },
	{ name: 'Vacuum', points: 2 },
	{ name: 'Dust', points: 2 },
	{ name: 'Take out trash', points: 1 },
	{ name: 'Mop', points: 3 },
	{ name: 'Wash dishes', points: 1 },
	{ name: 'Do laundry', points: 3 },
	{ name: 'Sweep', points: 2 },
	{ name: 'Clean windows', points: 2 },
	{ name: 'Clean fridge', points: 5 }
];

function init() {
	db.exec(roommateSchema);
	db.exec(choreSchema);
	db.exec(choreRecordSchema);

	console.log('Database initialized.');

	for (const roommate of sampleRoommates) {
		db.prepare(`INSERT INTO roommates (name) VALUES (?)`).run(roommate);
	}
	for (const chore of sampleChores) {
		db.prepare(`INSERT INTO chores (name, points) VALUES (?, ?)`).run(chore.name, chore.points);
	}

	console.log('Sample data inserted.');
}

init();

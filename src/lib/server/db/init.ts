import { db } from './db';
import { roommateSchema, choreSchema, choreRecordSchema } from './schema';

const roommates = ['Mark', 'Michi', 'Leo'];
const chores = [
	{ name: 'Müll rausbringen', points: 1 },
	{ name: 'Altglas wegbringen', points: 1 },
	{ name: 'Pfand wegbringen', points: 1 },
	{ name: 'Geschirrspülmaschine ausräumen', points: 2 },
	{ name: 'Alles Geschirr spülen', points: 2 },
	{ name: 'Küchenoberflächen putzen', points: 2 },
	{ name: 'Schneidebretter putzen', points: 2 },
	{ name: 'Gästehandtücher waschen', points: 2 },
	{ name: 'Biomüll rausbringen', points: 2 },
	{ name: 'Common areas saugen', points: 3 },
	{ name: 'Treppenhaus saugen', points: 3 },
	{ name: 'Waschbecken putzen', points: 3 },
	{ name: 'Ofen/Mikrowelle putzen', points: 4 },
	{ name: 'Dusche putzen', points: 4 },
	{ name: 'Klo putzen', points: 5 }
];

function init() {
	db.exec(roommateSchema);
	db.exec(choreSchema);
	db.exec(choreRecordSchema);

	console.log('Database initialized.');

	for (const roommate of roommates) {
		db.prepare(`INSERT INTO roommates (name) VALUES (?)`).run(roommate);
	}
	for (const chore of chores) {
		db.prepare(`INSERT INTO chores (name, points) VALUES (?, ?)`).run(chore.name, chore.points);
	}

	console.log('Sample data inserted.');
}

init();

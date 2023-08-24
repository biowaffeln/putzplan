import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { choreRecords, chores } from '$lib/server/schema';

export function load({ cookies }) {
	const roommateId = Number(cookies.get('roommateId'));
	if (!roommateId) {
		throw redirect(307, '/start');
	}

	return { roommateId, chores: db.select().from(chores).orderBy(chores.points).all() };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const roommateId = Number(formData.get('roommateId'));
		const choreId = Number(formData.get('choreId'));
		const completedAt = new Date().getTime();

		if (!roommateId || !choreId) {
			throw new Error('Missing roommateId or choreId');
		}

		db.insert(choreRecords).values({ roommateId, choreId, completedAt }).run();
	}
};

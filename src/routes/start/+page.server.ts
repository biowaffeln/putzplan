import { db } from '$lib/server/db';
import { roommates } from '$lib/server/schema';

export function load() {
	return {
		roommates: db.select().from(roommates).all()
	};
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const roommateId = data.get('roommateId')?.toString();
		if (!roommateId) return;

		cookies.set('roommateId', roommateId, {
			maxAge: 365 * 24 * 60 * 60
		});

		return { success: true };
	}
};

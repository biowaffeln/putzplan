import { getRoommates } from '$lib/server/db/queries';

export function load() {
	return {
		roommates: getRoommates()
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

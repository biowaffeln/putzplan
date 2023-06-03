import { getRoommates } from '$db/queries';

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

		cookies.set('roommateId', roommateId);

		return { success: true };
	}
};

import { redirect } from '@sveltejs/kit';
import { addChoreRecord, getChores } from '$db/queries';

export function load({ cookies }) {
	const roommateId = Number(cookies.get('roommateId'));
	if (!roommateId) {
		throw redirect(307, '/start');
	}

	const chores = getChores();

	return { roommateId, chores };
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

		addChoreRecord({ roommateId, choreId, completedAt });
	}
};

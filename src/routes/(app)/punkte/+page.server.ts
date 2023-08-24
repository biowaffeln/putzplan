import { getRoommatesRanked } from '$lib/server/ranked-roomates';

function startOfMonth(date: Date) {
	return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function load() {
	return {
		roommatesRanked: getRoommatesRanked(startOfMonth(new Date()))
	};
}

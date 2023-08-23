import { getRoommatesRanked } from '$lib/server/db/queries';

export function load() {
	return {
		roommatesRanked: getRoommatesRanked()
	};
}

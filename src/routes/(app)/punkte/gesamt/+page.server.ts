import { getRoommatesRanked } from '$lib/server/ranked-roomates';

export function load() {
	return {
		roommatesRanked: getRoommatesRanked()
	};
}

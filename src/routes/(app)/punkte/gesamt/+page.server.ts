import { getRoommatesRanked } from '$db/queries';

export function load() {
	return {
		roommatesRanked: getRoommatesRanked()
	};
}

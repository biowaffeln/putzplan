import { page } from '$app/stores';
import { derived } from 'svelte/store';

export function matchesPath(path: string, { exact = false }) {
	return derived(page, ($page) => {
		const pathname = $page.url.pathname;
		if (exact) {
			return pathname === path;
		}
		return pathname.startsWith(path);
	});
}

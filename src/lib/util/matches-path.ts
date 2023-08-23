import { page } from '$app/stores';
import { derived } from 'svelte/store';

export function matchesPath(path: string, { exact = false }) {
	return derived(page, ($page) => {
		if (exact) {
			return $page.url.pathname === path;
		} else {
			return $page.url.pathname.startsWith(path);
		}
	});
}

<script lang="ts">
	import { matchesPath } from '$lib/util/matches-path';
	export const cx = (...classes: unknown[]) => classes.filter(Boolean).join(' ');
	export let inactiveClass = '';
	export let activeClass = '';
	export let href: string;
	export let exact = false;

	const isActive = matchesPath(href, { exact });

	const { class: _class, ...restProps } = $$restProps;
</script>

<a {href} class={cx(_class, !$isActive && inactiveClass, $isActive && activeClass)} {...restProps}>
	<slot />
</a>

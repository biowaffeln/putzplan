<script lang="ts">
	import { page } from '$app/stores';
	export const cx = (...classes: unknown[]) => classes.filter(Boolean).join(' ');
	export let inactiveClass = '';
	export let activeClass = '';
	export let href: string;

	$: isActive = $page.url.pathname === href;

	const { class: _class, ...restProps } = $$restProps;
</script>

<a {href} class={cx(_class, !isActive && inactiveClass, isActive && activeClass)} {...restProps}>
	<slot />
</a>

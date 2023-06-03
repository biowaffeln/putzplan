<script lang="ts">
	import { page } from '$app/stores';
	import ActiveLink from '$components/active-link.svelte';
	import House from 'phosphor-svelte/lib/House'; // Recommended for faster compiling
	import ListBullets from 'phosphor-svelte/lib/ListBullets'; // Recommended for faster compiling
</script>

<div class="flex h-full flex-col">
	<div class="flex-1 overflow-y-auto">
		<slot />
	</div>
	<nav class="flex justify-center gap-4 border-t border-amber-5 bg-amber-1 px-2 py-4">
		<ActiveLink
			href="/"
			class="flex w-20 flex-col items-center rounded-xl py-1"
			activeClass="bg-amber-4 text-amber-11"
		>
			<House size={24} weight={$page.url.pathname === '/' ? 'duotone' : 'regular'} />
			<span class="text-sm">start</span>
		</ActiveLink>
		<ActiveLink
			href="/punkte"
			class="flex w-20 flex-col items-center rounded-xl py-1"
			activeClass="bg-amber-4 text-amber-11"
		>
			<ListBullets size={24} weight={$page.url.pathname === '/punkte' ? 'duotone' : 'regular'} />
			<span class="text-sm">punkte</span>
		</ActiveLink>
	</nav>
</div>

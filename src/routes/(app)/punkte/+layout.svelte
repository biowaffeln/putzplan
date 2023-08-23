<script lang="ts">
	import ActiveLink from '$lib/components/active-link.svelte';
</script>

<h2 class="mt-10 text-center font-hand text-4xl">Punktestand</h2>
<main class="mx-auto max-w-screen-lg px-4">
	<div class="mb-6 mt-10 flex justify-center gap-2">
		<ActiveLink
			href="/punkte"
			class="rounded-full border px-4 py-1.5"
			inactiveClass="border-sand-8 text-sand-11"
			activeClass="bg-amber-4 text-amber-11 border-amber-8"
			exact>diesen Monat</ActiveLink
		>
		<ActiveLink
			href="/punkte/gesamt"
			class="rounded-full border px-4 py-1.5"
			inactiveClass="border-sand-8 text-sand-11"
			activeClass="bg-amber-4 text-amber-11 border-amber-8"
			exact>gesamt</ActiveLink
		>
		<div class="mt-8" />
	</div>
	<slot />
</main>

<script lang="ts">
	import ActiveLink from '$components/active-link.svelte';
</script>

<main class="mx-auto max-w-screen-sm px-4 py-10">
	<h2 class="text-center font-hand text-3xl">Punktestand</h2>
	<div class="mb-6 mt-10 flex justify-center gap-2">
		<ActiveLink
			href="/punkte"
			class="rounded-full border px-4 py-1.5"
			inactiveClass="border-sand-8 text-sand-11"
			activeClass="bg-amber-4 text-amber-11 border-amber-8">diesen Monat</ActiveLink
		>
		<ActiveLink
			href="/punkte/gesamt"
			class="rounded-full border px-4 py-1.5"
			inactiveClass="border-sand-8 text-sand-11"
			activeClass="bg-amber-4 text-amber-11 border-amber-8">gesamt</ActiveLink
		>
		<div class="mt-8" />
	</div>
	<slot />
</main>

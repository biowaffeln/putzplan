<script lang="ts">
	import type { Chore } from '$lib/server/schema';
	import { pluralize } from '$lib/util/pluralize';
	import Modal from './modal.svelte';

	export let data;
	const { roommateId, chores } = data;

	let activeChoreId: number | null = null;
	$: isActive = (chore: Chore) => chore.id === activeChoreId;

	const resetActiveChore = () => {
		activeChoreId = null;
	};

	const points = pluralize({
		one: 'Punkt',
		many: 'Punkte'
	});
</script>

<h1 class="mt-10 text-center font-hand text-4xl">Putzplan</h1>
<main class="mx-auto grid max-w-screen-lg gap-3 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
	{#each chores as chore}
		<article
			class="flex flex-col rounded-lg border border-amber-7 bg-amber-2 p-3 shadow-md shadow-amber-10/20"
		>
			<div>
				<p class="text-sm text-amber-11">
					{chore.points}
					{points(chore.points)}
				</p>
				<h2 class="mt-1 font-hand text-2xl font-medium leading-none text-amber-12">{chore.name}</h2>
				<Modal {chore} {roommateId} isOpen={isActive(chore)} on:close={resetActiveChore} />
			</div>
			<div class="mt-4 flex flex-grow items-end justify-end">
				<button
					class="rounded-lg border border-amber-9 bg-amber-4 px-4 py-1.5 text-amber-11 md:py-1"
					on:click={() => (activeChoreId = chore.id)}>erledigen</button
				>
			</div>
		</article>
	{/each}
</main>

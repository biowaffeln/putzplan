<script lang="ts">
	import type { Chore } from '$db/schema';
	import { pluralize } from '$util/pluralize';
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

<main class="mx-auto grid max-w-screen-lg gap-2 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
	{#each chores as chore}
		<article class="rounded-lg border border-amber-7 bg-amber-2 p-3 shadow-md shadow-amber-10/20">
			<div>
				<p class="text-sm text-sand-11">
					{chore.points}
					{points(chore.points)}
				</p>
				<h2 class="font-hand text-2xl font-medium leading-none text-sand-12">{chore.name}</h2>
				<Modal {chore} {roommateId} isOpen={isActive(chore)} on:close={resetActiveChore} />
			</div>
			<div class="flex justify-end">
				<button
					class="rounded-lg border border-amber-9 bg-amber-4 px-4 py-2 text-amber-11 md:py-1"
					on:click={() => (activeChoreId = chore.id)}>erledigen</button
				>
			</div>
		</article>
	{/each}
</main>

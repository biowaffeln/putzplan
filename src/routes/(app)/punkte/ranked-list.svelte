<script lang="ts">
	import type { getRoommatesRanked } from '$lib/server/db/queries';
	import { pluralize } from '$lib/util/pluralize';

	export let roommatesRanked: ReturnType<typeof getRoommatesRanked>;

	const points = pluralize({ one: 'Punkt', many: 'Punkte' });
	const chores = pluralize({ one: 'Aufgabe', many: 'Aufgaben' });
</script>

<div class="flex flex-col gap-3">
	{#each roommatesRanked as r, i}
		<div
			class="relative mx-auto w-full max-w-md rounded-lg border border-dashed border-sand-8 py-4 text-center"
		>
			{#if i === 0}
				<img
					alt="Trophäe"
					src="https://media.giphy.com/media/PKEH9WF0eq3ja/giphy.gif"
					class="absolute left-3 top-3 w-12"
				/>
				<img
					alt="Trophäe"
					src="https://media.giphy.com/media/PKEH9WF0eq3ja/giphy.gif"
					class="absolute right-3 top-3 w-12"
				/>
			{/if}
			<h2 class="font-hand text-2xl">
				{i + 1}. {r.name}
			</h2>
			<p class="text-sand-12">
				{r.total_points}
				{points(r.total_points)}
			</p>
			<p class="text-sand-11">
				({r.total_chores}
				{chores(r.total_chores)} erfüllt)
			</p>
		</div>
	{/each}
</div>

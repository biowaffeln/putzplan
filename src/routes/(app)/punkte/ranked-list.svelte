<script lang="ts">
	import type { getRoommatesRanked } from '$db/queries';
	import { pluralize } from '$util/pluralize';

	export let roommatesRanked: ReturnType<typeof getRoommatesRanked>;

	const points = pluralize({ one: 'Punkt', many: 'Punkte' });
	const chores = pluralize({ one: 'Aufgabe', many: 'Aufgaben' });
</script>

<div class="flex flex-col gap-3">
	{#each roommatesRanked as r, i}
		<div class="rounded-lg border border-dashed border-sand-8 py-4 text-center">
			<h2 class="flex items-center justify-center gap-2 font-hand text-2xl">
				{#if i === 0}
					<span>
						<img
							alt="Trophäe"
							src="https://media.giphy.com/media/PKEH9WF0eq3ja/giphy.gif"
							width="60px"
						/>
					</span>
				{/if}
				<span>
					{i + 1}. {r.name}
				</span>
				{#if i === 0}
					<span>
						<img
							alt="Trophäe"
							src="https://media.giphy.com/media/PKEH9WF0eq3ja/giphy.gif"
							width="60px"
						/>
					</span>
				{/if}
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

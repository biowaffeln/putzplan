<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	export let form;
	const roommates = data.roommates;

	onMount(() => {
		if (form?.success) {
			goto('/', { replaceState: true });
		}
	});
</script>

<main class="grid h-full place-items-center">
	<form method="POST" class="flex flex-col">
		<img
			src="https://media.giphy.com/media/14csf1vDheYIBW/giphy.gif"
			width="150px"
			class="-mt-20 mb-6 self-center"
			alt="cleaning penguin"
		/>
		<p class="font-display text-amber-12">Wähle den Mitbewohner aus</p>
		<select
			name="roommateId"
			class="mt-2 appearance-none rounded-md border border-amber-6 py-1 text-center text-lg text-amber-12"
		>
			{#each roommates as roommate}
				<option value={roommate.id}>{roommate.name}</option>
			{/each}
		</select>
		<button class="mt-2 rounded-md bg-amber-4 py-2 font-medium tracking-wide text-amber-11"
			>auswählen</button
		>
	</form>
</main>

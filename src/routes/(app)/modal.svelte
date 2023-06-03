<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import confetti from 'canvas-confetti';
	import { focusTrap } from 'svelte-focus-trap';
	import type { Chore, Roommate } from '$db/schema';

	const dispatch = createEventDispatcher();

	export let isOpen: boolean;
	export let chore: Chore;
	export let roommateId: Roommate['id'];
	let state: 'idle' | 'submitting' | 'success' = 'idle';
	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	const onClose = async () => {
		dispatch('close');
		await sleep(500);
		state = 'idle';
	};
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') onClose();
	}}
/>

{#if isOpen}
	<div
		class="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto px-2"
		use:focusTrap
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 backdrop-blur-sm backdrop-brightness-50"
			on:click={onClose}
		/>

		<div
			class="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-lg transition-all"
			transition:scale={{ start: 0.95, duration: 200 }}
		>
			{#if state !== 'success'}
				<div class="mt-2 text-xl text-sand-11">
					Möchtest du
					<span class="font-hand text-2xl text-sand-12">
						{chore.name}
					</span>
					als erledigt eintragen?
				</div>
				<form
					method="POST"
					class="mt-8 flex justify-end gap-2"
					use:enhance={() => {
						state = 'submitting';
						return async () => {
							state = 'success';

							await sleep(200);
							confetti({
								origin: { y: 0.75 }
							});
						};
					}}
				>
					<input type="hidden" name="roommateId" value={roommateId} />
					<input type="hidden" name="choreId" value={chore.id} />
					<button
						class="rounded-md bg-sand-4 px-3 py-1 font-medium text-sand-12"
						type="button"
						on:click={onClose}>abbrechen</button
					>
					<button
						disabled={state === 'submitting'}
						class="rounded-md bg-amber-4 px-3 py-2 font-medium tracking-wide text-amber-11 md:py-1.5"
						type="submit">eintragen</button
					>
				</form>
			{/if}

			{#if state === 'success'}
				<div class="flex flex-col items-center text-center">
					<img
						alt="freundlicher Schwamm"
						src="https://media.giphy.com/media/2Ly5G3vR8taLg0xltM/giphy.gif"
						width="200px"
					/>
					<h2 class="-mt-2 mb-4 max-w-[300px] font-hand text-2xl font-bold">
						Danke für das Sauberhalten der WG!
					</h2>
					<button class="absolute right-2.5 top-3 text-sand-10" on:click={onClose}>
						<svg
							width="30px"
							height="30px"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color="currentColor"
							><path
								d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<script lang="ts">
	import RankedList from '../ranked-list.svelte';

	export let data;
	const { roommatesRanked } = data;
</script>

<RankedList {roommatesRanked} />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import HomeButton from '$lib/components/HomeButton.svelte';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { firestore, type ImgData } from '$lib/firebase';
	import { onMount } from 'svelte';
	import { docStore } from 'sveltefire';

	const imgDoc = docStore<ImgData>(firestore, `images/${$page.params.imgDocId}`);

	$: if ($imgDoc?.status == 'failed') {
		goto('/process_failed');
	} else if ($imgDoc?.status == 'success') {
		goto(`/adding/${imgDoc.id}`);
	}

	let dots = '...';
	onMount(() => {
		const interval = setInterval(() => {
			if (dots.length === 3) {
				dots = '';
			} else {
				dots += '.';
			}
		}, 500);

		return () => clearInterval(interval);
	});
</script>

<main
	class=" container h-screen bg-surface-900 relative flex flex-col space-y-12 justify-center items-center"
>
	<HomeButton />
	<SunnyTitle actionName="Snap" />
	<img src="/ghost.gif" alt="ghost flow" class="max-w-xs" />
	<div class=" max-w-xs">
		<p class="text-2xl font-semibold">Nice Snap! Let's see what we can do with this snap!</p>
		<div class="h-8" />
		<p class="text-2xl font-semibold">
			{#if $imgDoc?.status === 'uploading'}
				Uploading{dots}
			{:else if $imgDoc?.status === 'unprocess'}
				Waiting in Queue{dots}
			{:else if $imgDoc?.status === 'extracting_text'}
				Extracting text{dots}
			{:else if $imgDoc?.status === 'predicting_category'}
				Categorize image{dots}
			{:else if $imgDoc?.status === 'structurized_text'}
				Construct beautiful essay{dots}
			{:else}
				Brewing the magic{dots}
			{/if}
		</p>
	</div>
</main>

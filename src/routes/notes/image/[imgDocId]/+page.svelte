<script lang="ts">
	import { page } from '$app/stores';
	import HomeButton from '$lib/components/HomeButton.svelte';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { firestore, type ImgData } from '$lib/firebase';
	import { docStore } from 'sveltefire';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	const imgDoc = docStore<ImgData>(firestore, `images/${$page.params.imgDocId}`);
	function formatTimestamp(timestamp: number) {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
		const day = String(date.getDate()).padStart(2, '0');

		return `${year}-${month}-${day}`;
	}
</script>

<main class=" container h-screen bg-surface-900 relative flex flex-col space-y-4 px-8">
	<HomeButton />
	<a href="/" class="absolute top-0 right-10">
		<Icon class=" text-5xl" icon="icon-park-outline:back" />
	</a>
	<div class="h-36" />

	{#if $imgDoc}
		<h1 class="h1">{$imgDoc?.structurized_text.title.toUpperCase()}</h1>
		<h5 class="h5">{formatTimestamp($imgDoc.uploadTime)}</h5>

		<hr class="m-4" />

		<p>{$imgDoc.structurized_text.summary}</p>
	{:else}
		<div class="w-full h-full flex justify-center items-center">
			<ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	{/if}
</main>

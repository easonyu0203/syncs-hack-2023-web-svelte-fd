<script lang="ts">
	import { page } from '$app/stores';
	import HomeButton from '$lib/components/HomeButton.svelte';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { firestore, type ImgData } from '$lib/firebase';
	import { docStore } from 'sveltefire';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { clipboard } from '@skeletonlabs/skeleton';
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

<main
	class=" container h-screen bg-surface-900 justify-center relative flex space-y-12 flex-col px-8"
>
	<HomeButton />
	<a href="/" class="absolute top-0 left-0 m-6">
		<Icon class=" text-5xl" icon="icon-park-outline:back" />
	</a>

	{#if $imgDoc}
		<div class="flex flex-col space-y-3">
			<h1 class="h1">{$imgDoc?.structurized_text.title.toUpperCase()}</h1>
			<h5 class="h5">{formatTimestamp($imgDoc.uploadTime)}</h5>
			<h5 class="h5">{$imgDoc.structurized_text.location}</h5>

			<hr />

			<p class="m-2 text-lg">{$imgDoc.structurized_text.description}</p>
		</div>
	{:else}
		<div class="w-full h-full flex justify-center items-center">
			<ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	{/if}

	<button
		type="button"
		class="btn variant-filled rounded-lg mt-24 border-2 font-bold"
		use:clipboard={$imgDoc?.structurized_text.description}>Copy</button
	>
</main>

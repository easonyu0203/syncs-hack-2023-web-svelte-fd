<script lang="ts">
	import { firestore, type ImgData } from '$lib/firebase';
	import { page } from '$app/stores';
	import { docStore } from 'sveltefire';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { split } from 'postcss/lib/list';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { draw } from 'svelte/transition';
	import { filter } from '@skeletonlabs/skeleton';

	const imgDoc = docStore<ImgData>(firestore, `images/${$page.params.imgDocId}`);
	$: console.log($imgDoc);
</script>

<main
	class=" container h-screen bg-surface-900 relative flex flex-col justify-center items-center p-8 space-y-4"
>
	<div class=" flex justify-between w-full">
		<SunnyTitle actionName="Snap" />
	</div>

	{#if $imgDoc}
		<div class=" m-auto max-w-xs">
			<h1 class="h1">{$imgDoc?.structurized_text.title}</h1>
			{#if $imgDoc?.category == 'events'}
				<h4 class="h4">{$imgDoc?.structurized_text.location}</h4>
				<h4 class="h4">{$imgDoc?.structurized_text.time}</h4>
				<hr class="!border-t-2 m-2" />

				<p class=" max-h-64 overflow-auto">
					{$imgDoc?.structurized_text.description.replace('//', '\n')}
				</p>
			{:else if $imgDoc?.category == 'notes'}
				<hr class="!border-t-2 m-2" />

				<ul class="list max-h-72 overflow-scroll">
					{#each $imgDoc?.structurized_text.summary.replace('//', '').split('- ') as bul}
						<li class="list-item">{bul}</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div class=" flex flex-col space-y-6 mb-16">
			<a href="/">
				<button type="button" class="btn variant-filled-primary font-bold text-2xl w-48 rounded-lg"
					>Save as {$imgDoc?.category}</button
				>
			</a>
			<button type="button" class=" underline" on:click={() => drawerStore.open()}
				>Other Options</button
			>
		</div>
	{:else}
		<ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
	{/if}
</main>

<script lang="ts">
	import { goto } from '$app/navigation';
	import HomeButton from '$lib/components/HomeButton.svelte';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { uploadImg } from '$lib/firebase';
	import { FileButton } from '@skeletonlabs/skeleton';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { toastStore } from '@skeletonlabs/skeleton';

	let files: FileList;
	let pressAction = false;

	// when get files when go to processing page
	$: if (files && files.length > 0) {
		uploadImg(files).then((imgDocId) => {
			goto(`/processing/${imgDocId}`);
		});
		pressAction = true;
	}
</script>

<main class=" container h-screen bg-surface-900 relative flex flex-col justify-center items-center">
	<div class=" flex justify-between w-full">
		<SunnyTitle actionName="Snap" />
		<HomeButton />
	</div>
	<div class=" flex-grow relative flex items-center w-full justify-end">
		<img src="/snap.png" alt="snap pictur!" class=" left-0 aspect-square h-48 absolute" />
		<div class=" w-60 text-lg text-center pl-2 pr-8">
			Snap a picture or audio, and let us turn it into organized notes for you!
		</div>
	</div>
	<div class="w-full flex justify-end mt-4">
		<h1 class="h1 text-3xl mr-4">Events</h1>
	</div>
	<div class=" flex-grow relative flex items-center w-full justify-start mb-12">
		<img src="/nap.png" alt="nap tent!" class=" right-0 aspect-square h-36 absolute" />
		<div class=" w-60 text-lg text-center pl-8 pr-4">
			Snap a picture or audio, and let us turn it into organized notes for you!
		</div>
	</div>
	<div class=" flex-grow flex flex-col space-y-4 items-center mb-4">
		{#if pressAction}
			<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		{:else}
			<FileButton
				bind:files
				name="files"
				button="variant-filled-primary "
				class="btn variant-filled-primary rounded-xl font-extrabold w-48 p-1"
				><p class=" text-2xl">Add Picture</p></FileButton
			>
			<button
				type="button"
				class="btn p-3 variant-filled-secondary text-2xl rounded-xl font-extrabold w-48"
				on:click={() => {
					toastStore.trigger({
						message: 'Coming Soon! v2.0.'
					});
				}}>Add Audio</button
			>
		{/if}
	</div>
</main>

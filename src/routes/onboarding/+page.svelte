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

<main class=" container h-screen bg-surface-900 relative flex flex-col justify-around items-center">
	<HomeButton />
	<SunnyTitle actionName="Snap" />
	<div class=" flex-grow-0 h-52" />
	<div class=" flex-grow relative flex items-center w-full justify-end">
		<img src="/snap.png" alt="snap pictur!" class=" left-0 aspect-square h-64 absolute" />
		<div class=" w-60 text-lg text-center pl-2 pr-8">
			Snap a picture or audio, and let us turn it into organized notes for you!
		</div>
	</div>
	<div class=" flex-grow relative flex items-center w-full justify-start">
		<h1 class="h1 text-4xl absolute top-[-10%] right-0 m-8">Events</h1>
		<img src="/nap.png" alt="nap tent!" class=" right-0 aspect-square h-48 absolute" />
		<div class=" w-60 text-lg text-center pl-8 pr-4">
			Snap a picture or audio, and let us turn it into organized notes for you!
		</div>
	</div>
	<div class=" flex-grow flex flex-col space-y-4 items-center">
		{#if pressAction}
			<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		{:else}
			<FileButton
				bind:files
				name="files"
				button="variant-filled-primary "
				class="btn variant-filled-primary rounded-xl font-extrabold w-64 p-1"
				><p class=" text-2xl">Add Picture</p></FileButton
			>
			<button
				type="button"
				class="btn p-3 variant-filled-secondary text-2xl rounded-xl font-extrabold w-64"
				on:click={() => {
					toastStore.trigger({
						message: 'not yet implemented 🫠😭'
					});
				}}>Add Audio</button
			>
		{/if}
	</div>
</main>

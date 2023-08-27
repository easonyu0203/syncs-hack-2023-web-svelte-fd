<script lang="ts">
	import HomeButton from '$lib/components/HomeButton.svelte';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { collectionStore, userStore } from 'sveltefire';
	import { auth, firestore, uploadImg, type ImgData } from '$lib/firebase';
	import { collection, where, query, limit } from 'firebase/firestore';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { FileButton, ProgressRadial } from '@skeletonlabs/skeleton';
	import { toastStore } from '@skeletonlabs/skeleton';

	const imagesRef = collection(firestore, 'images');
	const q = query(imagesRef, where('userId', '==', $page.params.userId), limit(4));
	const images = collectionStore<ImgData>(firestore, q);

	let files: FileList;
	let pressAction = false;

	// when get files when go to processing page
	$: if (files && files.length > 0) {
		uploadImg(files).then((imgDocId) => {
			goto(`/processing/${imgDocId}`);
		});
		pressAction = true;
	}

	$: events = [
		...$images.filter((imgDoc) => imgDoc.category == 'events'),
		...Array(2).fill(0)
	].slice(0, 2);

	$: notes = [...$images.filter((imgDoc) => imgDoc.category == 'notes'), ...Array(4).fill(0)].slice(
		0,
		4
	);

	$: console.log($images);

	function formatTimestamp(timestamp: number) {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
		const day = String(date.getDate()).padStart(2, '0');

		return `${year}-${month}-${day}`;
	}

	function getMonthDate(timestamp: number) {
		const date = new Date(timestamp);
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
		const day = String(date.getDate()).padStart(2, '0');

		// turn month into three letters
		const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);

		return [monthName, day];
	}
</script>

<main class=" container h-screen bg-surface-900 flex flex-col justify-center items-center px-8">
	<div class=" mt-4 flex justify-between w-full">
		<SunnyTitle actionName="Notes" />
		<HomeButton />
	</div>
	<div class="w-full flex flex-grow justify-end">
		<a href={`/notes/${$page.params.userId}`} class=" underline">More Notes</a>
	</div>
	<section class="flex-grow grid grid-cols-2 gap-4 mt-2">
		{#each notes as imgDoc}
			{#if imgDoc == 0}
				<div class="card block card-hover h-16 p-2 rounded-xl">
					<div class="p-4 space-y-1">
						<div class="placeholder animate-pulse w-24" />
					</div>
				</div>
			{:else}
				<a
					href={`notes/image/${imgDoc.id}`}
					class="card card-hover p-4 max-h-20 overflow-clip rounded-xl flex justify-between flex-col"
				>
					<div class="font-bold text-sm">{imgDoc.structurized_text.title.toUpperCase()}</div>
					<!-- <div class="w-full flex justify-end">
						<dd class=" text-sm">{formatTimestamp(imgDoc.uploadTime)}</dd>
					</div> -->
				</a>
			{/if}
		{/each}
	</section>

	<div class="flex-grow w-full flex justify-between items-end mt-3">
		<a href={`/events/${$page.params.userId}`} class=" underline">More Events</a>
		<h1 class="h1 text-2xl">Events</h1>
	</div>

	<section class="flex-grow flex flex-col mt-2 gap-4">
		{#each events as imgDoc}
			{#if imgDoc == 0}
				<div class="card block card-hover h-16 p-2 rounded-xl">
					<div class="p-4 space-y-2 w-64">
						<div class="placeholder animate-pulse w-24" />
					</div>
				</div>
			{:else}
				<a href={`events/image/${imgDoc.id}`}>
					<dl class="flex w-80 max-h-20 overflow-clip">
						<div class="flex space-x-3">
							<div class=" flex flex-col rounded-xl border-2 p-2 px-4 justify-center items-center">
								<div class=" font-bold text-sm">{getMonthDate(imgDoc.uploadTime)[0]}</div>
								<div class="font-bold text-sm">{getMonthDate(imgDoc.uploadTime)[1]}</div>
							</div>
							<span class="flex-auto">
								<dt class=" font-extrabold">{imgDoc.structurized_text.title.toUpperCase()}</dt>
								<dd class=" text-sm">{imgDoc.structurized_text.location}</dd>
								<dd class=" text-sm">{formatTimestamp(imgDoc.uploadTime)}</dd>
							</span>
						</div>
					</dl>
				</a>
			{/if}
		{/each}
	</section>

	<div class=" flex-grow flex flex-col space-y-3 items-center my-6">
		{#if pressAction}
			<ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		{:else}
			<FileButton
				bind:files
				name="files"
				button="variant-filled-primary "
				class="btn variant-filled-primary rounded-xl font-extrabold w-48 p-1"
				><p class="">Add Picture</p></FileButton
			>
			<button
				type="button"
				class="btn p-3 variant-filled-secondary rounded-xl font-extrabold w-48"
				on:click={() => {
					toastStore.trigger({
						message: 'Coming Soon! v2.0.'
					});
				}}>Add Audio</button
			>
		{/if}
	</div>
</main>

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
	const q = query(imagesRef, where('userId', '==', $page.params.userId));
	const images = collectionStore<ImgData>(firestore, q);
	$: notes = $images.filter((imgDoc) => imgDoc.category == 'notes');

	let searchTerm = '';

	function formatTimestamp(timestamp: number) {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
		const day = String(date.getDate()).padStart(2, '0');

		return `${year}-${month}-${day}`;
	}
</script>

<main
	class=" container h-screen bg-surface-900 relative flex flex-col justify-start items-center px-8"
>
	<div class=" flex justify-between w-full">
		<SunnyTitle actionName="Notes" />
		<HomeButton />
	</div>
	<div class=" h-36" />
	<label class="label">
		<input
			class="input p-2 px-6 w-56 rounded-lg"
			type="text"
			bind:value={searchTerm}
			placeholder="Search Notes"
		/>
	</label>
	<section class="grid grid-cols-2 gap-4 mt-8 overscroll-auto">
		{#each notes as imgDoc}
			{#if searchTerm == '' || imgDoc.structurized_text.title
					.toUpperCase()
					.toLowerCase()
					.includes(searchTerm.toLowerCase())}
				<a
					href={`images/${imgDoc.id}`}
					class="card space-y-2 card-hover p-4 rounded-xl flex flex-col"
				>
					<div class="font-extrabold text-lg">{imgDoc.structurized_text.title.toUpperCase()}</div>
					<div class=" w-full flex justify-end text-sm">{formatTimestamp(imgDoc.uploadTime)}</div>
				</a>
			{/if}
		{/each}
	</section>
</main>

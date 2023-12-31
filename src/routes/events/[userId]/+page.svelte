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
	$: events = $images.filter((imgDoc) => imgDoc.category == 'events');

	let searchTerm = '';

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

<main
	class=" container h-screen bg-surface-900 relative flex flex-col justify-start items-center px-8"
>
	<div class=" mt-4 flex justify-between w-full">
		<SunnyTitle actionName="Events" />
		<HomeButton />
	</div>
	<label class="label">
		<input
			class="input p-2 px-6 w-56 rounded-lg"
			type="text"
			bind:value={searchTerm}
			placeholder="Search Events"
		/>
	</label>

	<section class="flex flex-col mt-6 gap-4">
		{#each events as imgDoc}
			{#if searchTerm == '' || imgDoc.structurized_text.title
					.toUpperCase()
					.toLowerCase()
					.includes(searchTerm.toLowerCase())}
				<a href={`events/image/${imgDoc.id}`}>
					<dl class="flex w-80">
						<div class="flex space-x-4">
							<div class=" flex flex-col rounded-xl border-2 p-2 px-4 justify-center items-center">
								<div class=" font-bold">{getMonthDate(imgDoc.uploadTime)[0]}</div>
								<div class="font-bold">{getMonthDate(imgDoc.uploadTime)[1]}</div>
							</div>
							<span class="flex-auto">
								<dt class=" font-extrabold text-lg">
									{imgDoc.structurized_text.title.toUpperCase()}
								</dt>
								<dd class=" text-sm">{imgDoc.structurized_text.location}</dd>
								<dd class=" text-sm">{formatTimestamp(imgDoc.uploadTime)}</dd>
							</span>
						</div>
					</dl>
				</a>
				<hr />
			{/if}
		{/each}
	</section>
</main>

<script lang="ts">
	import { firestore, type ImgData } from '$lib/firebase';
	import { page } from '$app/stores';
	import { docStore } from 'sveltefire';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';

	const imgDoc = docStore<ImgData>(firestore, `images/${$page.params.imgDocId}`);
</script>

<main
	class=" container h-screen relative bg-surface-900 relative flex flex-col justify-around items-center"
>
	<SunnyTitle actionName="Snap" />

	{#if $imgDoc}
		<img src={$imgDoc?.imgUrl} alt="image_snap" class="absolute top-0 right-0 mt-10 mr-6 w-48" />
	{/if}
</main>

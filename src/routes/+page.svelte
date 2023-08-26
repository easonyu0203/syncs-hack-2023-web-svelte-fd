<script lang="ts">
	import HomeButton from '$lib/components/HomeButton.svelte';
	import SunnyTitle from '$lib/components/SunnyTitle.svelte';
	import { collectionStore, userStore } from 'sveltefire';
	import { auth, firestore, type ImgData } from '$lib/firebase';
	import { collection, where, query } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	const user = userStore(auth);

	$: if ($user) {
		goto(`/${$user.uid}`);
	}
</script>

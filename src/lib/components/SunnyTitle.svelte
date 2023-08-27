<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, userData } from '$lib/firebase';
	import { signOut } from 'firebase/auth';

	export let actionName = 'Note';
	let name = 'SnapNote';
	$: if ($userData?.displayName) {
		name = $userData?.displayName;
	} else {
		name = 'SnapNote';
	}
</script>

<button
	on:click={() => {
		signOut(auth);
		goto('/login');
	}}
	class=" m-4"
>
	<h1 class="h1 text-xl z-40">{name}'s</h1>
	<h1 class="h1 text-xl z-40">{actionName}</h1>
</button>

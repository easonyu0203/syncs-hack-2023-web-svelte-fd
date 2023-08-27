<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, userData } from '$lib/firebase';
	import { signOut } from 'firebase/auth';

	export let actionName = 'Note';
	let name = 'SnapNote';
	$: name = $userData?.displayName || 'SnapNote';
</script>

<button
	on:click={() => {
		signOut(auth);
		goto('/login');
	}}
	class=" absolute top-0 left-0 m-4"
>
	<h1 class="h1 text-xl">{name}'s</h1>
	<h1 class="h1 text-xl">{actionName}</h1>
</button>

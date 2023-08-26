<script lang="ts">
	import Icon from '@iconify/svelte';
	import { signInAnonymously } from 'firebase/auth';

	import { auth, signInWithGoogle, userData } from '$lib/firebase';
	import { userStore } from 'sveltefire';
	import { goto } from '$app/navigation';

	const user = userStore(auth);

	$: if ($user) {
		// user is login
		if ($userData?.firstTimeLogin) {
			goto('/onboarding');
		} else {
			goto('/onboarding');

			// goto('/')
		}
	}
</script>

<main
	class=" container h-screen bg-tertiary-800 flex flex-col justify-around items-center relative z-0"
>
	<div class=" bg-surface-900 absolute bottom-0 h-[50%] -z-10 w-full rounded-tr-[7em]" />
	<div class="flex flex-col items-center">
		<img src="/logo.png" alt="logo" class=" aspect-square max-h-60" />
		<p class=" w-64 text-center text-lg font-semibold">
			Snap or Record to Create Organized Notes Instantly
		</p>
	</div>
	<div class=" flex flex-col space-y-12 min-w-48">
		<div class="flex flex-col items-center space-y-4">
			<h1 class="h1 text-5xl">Login</h1>
			<h2 class="h2">Snap Note</h2>
		</div>
		<button
			type="button"
			class="btn variant-filled rounded-lg font-bold"
			on:click={signInWithGoogle}
		>
			<Icon class="text-lg" icon="devicon:google" />
			<span>Sign in with Google</span>
		</button>
		<button
			type="button"
			class="btn variant-filled rounded-lg font-bold"
			on:click={() => signInAnonymously(auth)}
		>
			<Icon class="text-xl" icon="mdi:anonymous" />
			<span>Sign in with Facebook</span>
		</button>
	</div>
</main>

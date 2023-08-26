<script lang="ts">
	import { auth, signInWithGoogle, uploadImg } from '$lib/firebase';
	import { docStore, userStore } from 'sveltefire';
	import { FileButton } from '@skeletonlabs/skeleton';
	const user = userStore(auth);
	let files: FileList;
	let err_str: string = '';
	$: files && console.log(files);
</script>

<div class="container h-full mx-auto flex flex-col space-y-6 justify-center items-center">
	<button type="button" class="btn variant-filled" on:click={signInWithGoogle}>Sign in</button>
	<FileButton accept="image/*" name="files" bind:files />
	<button type="button" class="btn variant-filled" on:click={() => uploadImg(files)}>Upload</button>
	<p class="text-2xl">{err_str}</p>
</div>

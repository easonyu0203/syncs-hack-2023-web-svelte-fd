<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { FirebaseApp } from 'sveltefire';
	import { auth, firestore, storage } from '$lib/firebase';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { filter, Emerald, BlueNight, Rustic /* ... */ } from '@skeletonlabs/skeleton';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
</script>

<Toast position="t" />
<Rustic />
<Drawer position="bottom" height=" h-52">
	<div class=" flex flex-col space-y-8 h-full justify-center items-center">
		<a href="/">
			<button type="button" class="btn variant-filled-secondary font-bold text-2xl w-48 rounded-lg"
				>Save as Note</button
			>
		</a>
		<a href="/">
			<button type="button" class="btn variant-filled-error font-bold text-2xl w-48 rounded-lg"
				>Don't Save</button
			>
		</a>
	</div>
</Drawer>
<FirebaseApp {auth} {firestore} {storage}>
	<slot />
</FirebaseApp>

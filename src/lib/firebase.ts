// Firebase & Firestore imports
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

// Firebase authentication imports
import { getAuth, signInWithPopup, type UserCredential } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// Firebase storage imports
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import type { Readable } from 'svelte/motion';
import { derived } from 'svelte/store';
import { docStore, userStore } from 'sveltefire';

// Firebase configuration object
const firebaseConfig = {
	apiKey: 'AIzaSyB54nr8Kf0B93FP5lCM_u0q0S6KnetybzM',
	authDomain: 'syncs-hack-2023.firebaseapp.com',
	projectId: 'syncs-hack-2023',
	storageBucket: 'syncs-hack-2023.appspot.com',
	messagingSenderId: '889434581645',
	appId: '1:889434581645:web:c6e07f55241380373d50c4',
	measurementId: 'G-1TNP3QXPE0'
};

// User data interface
export interface UserData {
	email: string;
	displayName: string;
	photoURL: string;
	firstTimeLogin: boolean;
}

// Image data interface
export interface ImgData {
	userId: string;
	imgUrl: string | null;
	gsUrl: string | null;
	uploadTime: number;
	status:
		| 'uploading'
		| 'unprocess'
		| 'extracting_text'
		| 'predicting_category'
		| 'structurized_text'
		| 'success'
		| 'failed';
	text: string | null;
	structurized_text: any | null;
	category: string | null;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting firebase utilities
export const firestore = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

export const userData: Readable<UserData | null> = derived(userStore(auth), ($user, set) => {
	if ($user) {
		const { subscribe } = docStore<UserData>(firestore, `users/${$user.uid}`);
		return subscribe((data) => {
			set(data);
		});
	} else {
		set(null);
	}
});

/**
 * Handle Google sign-in and store user's data in Firestore
 */
export async function signInWithGoogle() {
	// Using GoogleAuthProvider for sign in
	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);

	const user = result.user;
	const userDocRef = doc(firestore, 'users', user.uid);

	// get the user
	const firstTimeLogin = !(await getDoc(userDocRef)).exists();

	// Prepare user data to be stored/merged in Firestore
	const userData: UserData = {
		email: user.email ?? '[no email]',
		displayName: user.displayName ?? '[no name]',
		photoURL: user.photoURL ?? '',
		firstTimeLogin: firstTimeLogin
	};

	// Store or merge user data
	await setDoc(userDocRef, userData, { merge: true });

	console.log('sign in!');
}

/**
 * Handle image upload to Firebase Storage and its metadata to Firestore
 * @param {FileList} img - Image file list
 * @returns {Promise<string>} - Image document ID
 */
export async function uploadImg(img: FileList): Promise<string> {
	if (!img || img.length === 0) {
		throw new Error('No image provided.');
	}

	const file = img[0];
	const fileExtension = file.name.split('.').pop()?.toLowerCase();

	// Check for supported file extensions
	if (
		!fileExtension ||
		!['jpg', 'jpeg', 'png', 'heic', 'tif', 'tiff', 'bmp'].includes(fileExtension)
	) {
		throw new Error('Supported formats are jpg, jpeg, png, heic, tif, tiff, and bmp.');
	}

	const userId = auth.currentUser?.uid;
	if (!userId) {
		throw new Error('User not authenticated.');
	}

	// Use timestamp for unique naming
	const timestamp = new Date().getTime();
	const fileNameWithTime = `${timestamp}.jpg`; // Always save as .jpg
	const storageRef = ref(storage, `user/${userId}/${fileNameWithTime}`);

	// Store image metadata in Firestore
	const imgDocRef = doc(firestore, 'images', `${userId}_${timestamp}`);
	const imgData: ImgData = {
		userId: userId,
		imgUrl: null,
		gsUrl: null,
		uploadTime: timestamp,
		status: 'uploading',
		text: null,
		structurized_text: null,
		category: null
	};
	await setDoc(imgDocRef, imgData);

	console.log('uploading image...');

	const convertAndUpload = async (fileToUpload: File) => {
		// Upload image to Firebase Storage
		const result = await uploadBytes(storageRef, fileToUpload);
		// Construct the gs:// URL for the storage location
		const storagePath = result.ref.fullPath;
		const gsUrl = `gs://${storageRef.bucket}/${storagePath}`;
		const url = await getDownloadURL(result.ref);
		imgData.imgUrl = url;
		imgData.gsUrl = gsUrl;
		imgData.status = 'unprocess';

		// Store image metadata in Firestore
		await setDoc(imgDocRef, imgData, { merge: true });
	};

	if (fileExtension === 'heic' || fileExtension === 'png') {
		const heic2any = (await import('heic2any')).default;
		const convertedFile = (await heic2any({
			blob: file,
			toType: 'image/jpeg',
			quality: 0.8 // You can adjust this for desired quality
		})) as File;
		convertAndUpload(convertedFile)
			.then(() => {
				console.log('Image uploaded successfully.');
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		convertAndUpload(file)
			.then(() => {
				console.log('Image uploaded successfully.');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return imgDocRef.id;
}

// Firebase & Firestore imports
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

// Firebase authentication imports
import { getAuth, signInWithPopup, type UserCredential } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// Firebase storage imports
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

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
	photoUrl: string;
}

// Image data interface
export interface ImgData {
	userId: string;
	imgUrl: string;
	uploadTime: string;
	status:
		| 'unprocess'
		| 'extracting_text'
		| 'predicting_category'
		| 'structurized_text'
		| 'success'
		| 'failed';
	text: string | null;
	structurized_text: string | null;
	category: string | null;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting firebase utilities
export const firestore = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * Handle Google sign-in and store user's data in Firestore
 */
export async function signInWithGoogle() {
	// Using GoogleAuthProvider for sign in
	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);

	const user = result.user;
	const userDocRef = doc(firestore, 'users', user.uid);

	// Prepare user data to be stored/merged in Firestore
	const userData = {
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL
	};

	// Store or merge user data
	await setDoc(userDocRef, userData, { merge: true });
}

/**
 * Handle image upload to Firebase Storage and its metadata to Firestore
 * @param {FileList} img - Image file list
 */
export async function uploadImg(img: FileList) {
	if (img.length === 0) {
		throw new Error('No image provided.');
	}

	const file = img[0];
	const fileExtension = file.name.split('.').pop()?.toLowerCase();

	// Check for supported file extensions
	if (fileExtension !== 'jpg' && fileExtension !== 'png') {
		throw new Error('Only jpg or png formats are accepted.');
	}

	const userId = auth.currentUser?.uid;
	if (!userId) {
		throw new Error('User not authenticated.');
	}

	// Use timestamp for unique naming
	const timestamp = new Date().getTime();
	const uploadTime = new Date(timestamp).toString();
	const fileNameWithTime = `${timestamp}.${fileExtension}`;
	const storageRef = ref(storage, `user/${userId}/${fileNameWithTime}`);

	// Upload image to Firebase Storage
	const result = await uploadBytes(storageRef, file);
	const url = await getDownloadURL(result.ref);

	// Prepare image metadata to be stored in Firestore
	const imgData: ImgData = {
		userId: userId,
		imgUrl: url,
		uploadTime: uploadTime,
		status: 'unprocess',
		text: null,
		structurized_text: null,
		category: null
	};

	// Store image metadata in Firestore
	const imgDocRef = doc(firestore, 'images', `${userId}_${timestamp}`);
	await setDoc(imgDocRef, imgData);
}
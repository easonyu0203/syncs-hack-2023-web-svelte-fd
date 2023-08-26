import { initializeApp } from "firebase/app";
import { doc, onSnapshot, collection, getFirestore, setDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { w as writable, d as derived } from "./index.js";
function userStore(auth2, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2
    };
  }
  if (!auth2) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth2?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth2, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
function docStore(firestore2, ref2, startWith) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null,
      id: ""
    };
  }
  if (!firestore2) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2,
      ref: null,
      id: ""
    };
  }
  const docRef = typeof ref2 === "string" ? doc(firestore2, ref2) : ref2;
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
function collectionStore(firestore2, ref2, startWith = []) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  if (!firestore2) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable([]);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  const colRef = typeof ref2 === "string" ? collection(firestore2, ref2) : ref2;
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((s) => {
        return { id: s.id, ref: s.ref, ...s.data() };
      });
      set(data);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: colRef
  };
}
const firebaseConfig = {
  apiKey: "AIzaSyB54nr8Kf0B93FP5lCM_u0q0S6KnetybzM",
  authDomain: "syncs-hack-2023.firebaseapp.com",
  projectId: "syncs-hack-2023",
  storageBucket: "syncs-hack-2023.appspot.com",
  messagingSenderId: "889434581645",
  appId: "1:889434581645:web:c6e07f55241380373d50c4",
  measurementId: "G-1TNP3QXPE0"
};
initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth();
const storage = getStorage();
const userData = derived(userStore(auth), ($user, set) => {
  if ($user) {
    const { subscribe } = docStore(firestore, `users/${$user.uid}`);
    return subscribe((data) => {
      set(data);
    });
  } else {
    set(null);
  }
});
async function uploadImg(img) {
  if (!img || img.length === 0) {
    throw new Error("No image provided.");
  }
  const file = img[0];
  const fileExtension = file.name.split(".").pop()?.toLowerCase();
  if (!fileExtension || !["jpg", "jpeg", "png", "heic", "tif", "tiff", "bmp"].includes(fileExtension)) {
    throw new Error("Supported formats are jpg, jpeg, png, heic, tif, tiff, and bmp.");
  }
  const userId = auth.currentUser?.uid;
  if (!userId) {
    throw new Error("User not authenticated.");
  }
  const timestamp = (/* @__PURE__ */ new Date()).getTime();
  const fileNameWithTime = `${timestamp}.jpg`;
  const storageRef = ref(storage, `user/${userId}/${fileNameWithTime}`);
  const imgDocRef = doc(firestore, "images", `${userId}_${timestamp}`);
  const imgData = {
    userId,
    imgUrl: null,
    gsUrl: null,
    uploadTime: timestamp,
    status: "uploading",
    text: null,
    structurized_text: null,
    category: null
  };
  await setDoc(imgDocRef, imgData);
  console.log("uploading image...");
  const convertAndUpload = async (fileToUpload) => {
    const result = await uploadBytes(storageRef, fileToUpload);
    const storagePath = result.ref.fullPath;
    const gsUrl = `gs://${storageRef.bucket}/${storagePath}`;
    const url = await getDownloadURL(result.ref);
    imgData.imgUrl = url;
    imgData.gsUrl = gsUrl;
    imgData.status = "unprocess";
    await setDoc(imgDocRef, imgData, { merge: true });
  };
  if (fileExtension === "heic" || fileExtension === "png") {
    const heic2any = (await import("heic2any")).default;
    const convertedFile = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality: 0.8
      // You can adjust this for desired quality
    });
    convertAndUpload(convertedFile).then(() => {
      console.log("Image uploaded successfully.");
    }).catch((error) => {
      console.log(error);
    });
  } else {
    convertAndUpload(file).then(() => {
      console.log("Image uploaded successfully.");
    }).catch((error) => {
      console.log(error);
    });
  }
  return imgDocRef.id;
}
export {
  auth as a,
  uploadImg as b,
  collectionStore as c,
  docStore as d,
  userData as e,
  firestore as f,
  storage as s,
  userStore as u
};

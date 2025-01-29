import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWGwR5vd4VfPqzyFuwLzCp2yGFja1A6Qk",
  authDomain: "certificados-jata-3192.firebaseapp.com",
  projectId: "certificados-jata-3192",
  storageBucket: "certificados-jata-3192.firebasestorage.app",
  messagingSenderId: "374235907311",
  appId: "1:374235907311:web:92f95ec83fb642f95a071a",
  measurementId: "G-REKKMCL0YZ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function certificados(file) {
  const storageRef = ref(storage, `Certificados/${file.name}`); // Carpeta "certificados/"
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
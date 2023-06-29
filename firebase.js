import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDfznH1s45rGFpHeiwfhp6WzffdN38j7kc",
    authDomain: "notify-686fb.firebaseapp.com",
    projectId: "notify-686fb",
    storageBucket: "notify-686fb.appspot.com",
    messagingSenderId: "904316137324",
    appId: "1:904316137324:web:680bbad539ed51ae52cd49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
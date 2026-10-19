
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsHxoEw1Ki1oJAfd7JHc20k9BjlK6w5xo",
  authDomain: "friend-card-843c3.firebaseapp.com",
  projectId: "friend-card-843c3",
  storageBucket: "friend-card-843c3.firebasestorage.app",
  messagingSenderId: "818958112450",
  appId: "1:818958112450:web:66dfc0475f7804f3cd4d5b",
  measurementId: "G-VZB80KFGB0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  signInWithEmailAndPassword,
  signOut
};

// Save a friend's answers to Firestore
export async function saveFriendAnswer({
  friendName = "Gayu Maa",
  percentage = "",
  reason = "",
  writtenAnswer = ""
}) {
  try {
    const docRef = await addDoc(collection(db, "friend_answers"), {
      friendName,
      percentage,
      reason,
      writtenAnswer,
      createdAt: serverTimestamp()
    });

    console.log("Answers saved successfully:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving answers:", error);
    throw error;
  }
}

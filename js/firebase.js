import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"

import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPKEN_iQxfWL77y5jAg8sRiJsBz95vBVw",
  authDomain: "padload-52307.firebaseapp.com",
  projectId: "padload-52307",
  storageBucket: "padload-52307.appspot.com",
  messagingSenderId: "195585889136",
  appId: "1:195585889136:web:5f7c9177fb56b1d2a8b5b5"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  export const db = getFirestore();

  //Create a user
  export const save_user = (email,password,usuario) => addDoc(collection(db,"padload2"),{
    email, password, usuario
  });

  export const onGetUsers = (callback) => onSnapshot (collection(db, 'padload2'), callback);

  
  //Show the users
  export const getFunko = (id) => getDoc(doc(db, "padload2", id));

  //update users
  export const updateFunko = (id, newFields) => updateDoc(doc(db,"padload2", id), newFields);

  //export documents
  export const getUser = () => getDocs(collection(db, "padload2"));



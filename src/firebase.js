import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaZTLUhMzwFD1UWGtOCIeKiBH0c7BMydM",
  authDomain: "facebook-messenger-clone-2f924.firebaseapp.com",
  projectId: "facebook-messenger-clone-2f924",
  storageBucket: "facebook-messenger-clone-2f924.appspot.com",
  messagingSenderId: "513981371969",
  appId: "1:513981371969:web:807f80915483bd500bd8c0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

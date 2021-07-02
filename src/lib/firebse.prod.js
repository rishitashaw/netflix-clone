import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//seed db

//config

//initialize

const config = {
  apiKey: "AIzaSyC_YVmBgtSNWG4MmDZlxsdL7yUtW7gbg6o",
  authDomain: "netflix-clone-a86ef.firebaseapp.com",
  projectId: "netflix-clone-a86ef",
  storageBucket: "netflix-clone-a86ef.appspot.com",
  messagingSenderId: "172647593244",
  appId: "1:172647593244:web:1d822dab1ad8132d0136d9",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

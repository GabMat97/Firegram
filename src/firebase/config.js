import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdGA-Dpxj_wbx4mByYC6redGQ94BxqgtA",
    authDomain: "firegram-95104.firebaseapp.com",
    projectId: "firegram-95104",
    storageBucket: "firegram-95104.appspot.com",
    messagingSenderId: "280834791024",
    appId: "1:280834791024:web:d07d8e96d72fc8f55706b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };
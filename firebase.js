// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6WsjegzbT83V6tMoHz4AEfzkFW7oWVs8",
  authDomain: "rn-trash-tracker-v2.firebaseapp.com",
  projectId: "rn-trash-tracker-v2",
  storageBucket: "rn-trash-tracker-v2.appspot.com",
  messagingSenderId: "1057163261186",
  appId: "1:1057163261186:web:d86de90a2854e7df223e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const storage = getStorage(app);
const db = getFirestore(app);


export { auth, db, storage };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import {getFirestore, initializeFirestore} from 'firebase/firestore';
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// //For fire group chat


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAD8Xvn3Lf3hsuOLe6sc8wSLw1STa16zsM",
//   authDomain: "rn-trash-tracker.firebaseapp.com",
//   projectId: "rn-trash-tracker",
//   storageBucket: "rn-trash-tracker.appspot.com",
//   messagingSenderId: "643867706308",
//   appId: "1:643867706308:web:a6c36df7603c2128311a91"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //Authenticate 
// const auth = getAuth(app);


// const storage = getStorage(app);
//  //const db = getFirestore(app);
//  const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

//  export { auth, db, storage }

// ;





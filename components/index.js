import {initializeApp} from 'firebase/app'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAD8Xvn3Lf3hsuOLe6sc8wSLw1STa16zsM",
    authDomain: "rn-trash-tracker.firebaseapp.com",
    projectId: "rn-trash-tracker",
    storageBucket: "rn-trash-tracker.appspot.com",
    messagingSenderId: "643867706308",
    appId: "1:643867706308:web:a6c36df7603c2128311a91"
  };
  //initialize firebase
  initializeApp(firebaseConfig)

  //init services
  const db= getFirestore()

  //collection ref
  const colRef=collection(db,'books')

  //get collection data 
  getDocs(colRef)
    .then((snapShot) => {
        console.log(snapShot.docs)
    })
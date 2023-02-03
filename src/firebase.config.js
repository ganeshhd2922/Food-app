import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBWjz8pZC5L9iFS_T9Il2M50ETNAWGtWl8",
    authDomain: "restaurantapp-c9052.firebaseapp.com",
    databaseURL: "https://restaurantapp-c9052-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-c9052",
    storageBucket: "restaurantapp-c9052.appspot.com",
    messagingSenderId: "563241903709",
    appId: "1:563241903709:web:16b9c014ee6359c0d7cfb4"
  };


  const app = getApps.Length >0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage}
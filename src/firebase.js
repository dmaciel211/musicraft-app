import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDPM12eIJLXWmvMvmnXiMoP0X1R_qQ1QiI",
    authDomain: "musicraft-app.firebaseapp.com",
    projectId: "musicraft-app",
    storageBucket: "musicraft-app.appspot.com",
    messagingSenderId: "271122223129",
    appId: "1:271122223129:web:38809896bf02092c419a88"
  };
  // Initialize Firebase
  

const app = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const itemsCollection = firebase.firestore(app).collection("productos")

export const db = app.firestore();


import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAUiJfBIfdLviof9oX8Zxz47d8lkJ0411M",
    authDomain: "crudjs-c0ee5.firebaseapp.com",
    projectId: "crudjs-c0ee5",
    storageBucket: "crudjs-c0ee5.appspot.com",
    messagingSenderId: "99773266845",
    appId: "1:99773266845:web:5b19a2435e1da6d51a0d74"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
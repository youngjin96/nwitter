import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDlQofBCA62kJj44bU-xtHzAkh4ZxBNbgA",
    authDomain: "nwitter-1f5ed.firebaseapp.com",
    projectId: "nwitter-1f5ed",
    storageBucket: "nwitter-1f5ed.appspot.com",
    messagingSenderId: "1035547299837",
    appId: "1:1035547299837:web:0efe8a242db7a760d25394"
  };

  export default  firebase.initializeApp(firebaseConfig);
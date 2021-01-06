import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC9dfUxV45VxQ5m6aCgSQK6C6BkDhT0wOk",
    authDomain: "twitter-c55c9.firebaseapp.com",
    projectId: "twitter-c55c9",
    storageBucket: "twitter-c55c9.appspot.com",
    messagingSenderId: "54227471137",
    appId: "1:54227471137:web:8fbf3e2cba934a29e78c60"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  const db=fire.firestore();
  const auth=fire.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;

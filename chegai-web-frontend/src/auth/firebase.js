import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const user = firebase.auth().currentUser;
const idToken = await user.getIdToken();

const response = await fetch('http://127.0.0.1:8000/api/dashboard/', {
  method: 'GET',
  headers: {
    Authorization: idToken
  }
});

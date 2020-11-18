import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkFq6HZKRwC2sW_MPLiB1Ip_UU0-gvncQ",
    authDomain: "cs113-a094f.firebaseapp.com",
    databaseURL: "https://cs113-a094f.firebaseio.com",
    projectId: "cs113-a094f",
    storageBucket: "cs113-a094f.appspot.com",
    messagingSenderId: "852005572818",
    appId: "1:852005572818:web:2a72d58729947fc50bdd0b",
    measurementId: "G-KJNK50K41Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



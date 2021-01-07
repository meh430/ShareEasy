// Your web app's Firebase configuration
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_LINKAPI,
    authDomain: "shareeasy-dd2ce.firebaseapp.com",
    databaseURL: "https://shareeasy-dd2ce.firebaseio.com",
    projectId: "shareeasy-dd2ce",
    storageBucket: "shareeasy-dd2ce.appspot.com",
    messagingSenderId: "999885360104",
    appId: "1:999885360104:web:2be601450588e71272325d",
    measurementId: "G-1H3P6BK9N7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
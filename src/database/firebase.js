import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhBkFP7An2xrxfa7Ru-uOVh_nub43WG74",
  authDomain: "video-tipscode.firebaseapp.com",
  projectId: "video-tipscode",
  storageBucket: "video-tipscode.appspot.com",
  messagingSenderId: "302780905881",
  appId: "1:302780905881:web:b1e40e3b318f0cb2737b08",
};

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

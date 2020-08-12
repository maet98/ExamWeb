import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCSDACilgklXE2eu0xUey68nnfw0Sjpu6c",
    authDomain: "phonic-altar-238300.firebaseapp.com",
    databaseURL: "https://phonic-altar-238300.firebaseio.com",
    projectId: "phonic-altar-238300",
    storageBucket: "phonic-altar-238300.appspot.com",
    messagingSenderId: "625650662276",
    appId: "1:625650662276:web:ebe6963daa3f0c38a87bd1",
    measurementId: "G-R76C6ZPPNN"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;

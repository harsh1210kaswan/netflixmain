import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDU84jqLlsJiNA1l9B-aJcjlJRPMTzKSEA",
    authDomain: "netflix-1210.firebaseapp.com",
    projectId: "netflix-1210",
    storageBucket: "netflix-1210.appspot.com",
    messagingSenderId: "562356787965",
    appId: "1:562356787965:web:65b24966538d633ebbbc94",
    measurementId: "G-QR9CK70VBQ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwsfybCuYNdfw39biDF--ZhgLc7xSl-vw",
    authDomain: "school-1b06b.firebaseapp.com",
    databaseURL: "https://school-1b06b.firebaseio.com",
    projectId: "school-1b06b",
    storageBucket: "",
    messagingSenderId: "202550984392",
    appId: "1:202550984392:web:f9211d5c4bf29240"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const eventRef = firebaseApp.database().ref().child('events');
import  *  as firebase from 'firebase/app';
import { getDatabase, ref, set, update } from 'firebase/database';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = getDatabase();

// Experimenting with Firebase commands

set(ref(db), {
    name: "James G",
    age: 29,
    isSingle: false,
    location: {
        city: 'London',
        country: "England"
    },
    father: "Guy",
})

update(ref(db), {
    age: 30
});
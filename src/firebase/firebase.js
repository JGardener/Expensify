import  *  as firebase from 'firebase/app';
import * as database from 'firebase/database';

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

const db = database.getDatabase();



// Experimenting with Firebase commands

update(ref(db, 'Notes/-MmgOCRmEVXyKsBpqgLF'), {
        body: 'Buy food'
})


push(ref(db, 'Notes'), {
    title: 'Course Topics',
    body: 'React, JS, CSS'
})

set(ref(db), {
    name: "James",
    age: 29,
    isSingle: false,
    location: {
        city: 'London',
        country: "England"
    },
    father: "Guy",
    stressLevel: 9,
    job: {
        position: 'Software Developer',
        company: 'Google'
    }
}).then(() => {
    console.log('Original database populated')
}).catch((error) => {
        console.log("This failed!", error)
})
    
const database = ref(db);
    onValue(database, (snapshot) => {
        console.log(`${snapshot.val().name} is a ${snapshot.val().job.position} at ${snapshot.val().job.company}`)
})

update(ref(db), {
    age: 30,
    attributes: {
        height: "183.1cm",
        weight: "too much"
    }
})

remove(ref(db, 'isSingle'))
.then(() => {
        console.log('Removed isSingle')
    }).catch((error) => {
            console.log("Update failed:", error)
});
        
update(ref(db), {
    stressLevel: 10,
    job: 'Amazon',
    'location/city': 'Seattle'
})
    
const reference = ref(db);
    onValue(reference, (snapshot) => {
        console.log(snapshot.val())
})

setTimeout(() => {
    update(reference, {
    age: 45
    })
}, 3000)

setTimeout(() => {
    off(ref(db))
}, 7000)

setTimeout(() => {
    update(reference, {
    age: 50
    })
}, 10000)
                                    
ref(db).on('value', (snapshot) => {
    console.log(snapshot.val);
    }, (errorObject) => {
    console.log('The read failed: ', errorObject)
})

database.onChildRemoved(database.ref(db, 'Expenses'), (snapshot) => {
    console.log("onChildRemoved: ", snapshot.key, snapshot.val())
});

database.onChildChanged(database.ref(db, 'Expenses'), (snapshot) => {
    console.log("onChildChanged: ", snapshot.key, snapshot.val())
});

database.onChildAdded(database.ref(db, 'Expenses'), (snapshot) => {
    console.log("onChildAdded: ", snapshot.key, snapshot.val())
})
    
onValue(ref(db, 'Expenses'), (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    })
    console.log(expenses)
})

const expenseOne = {
    description: 'Expense 1',
    note: "Note 1",
    amount: 200,
    createdAt: 'October',
}

const expenseTwo =  {  
    description: 'Expense 2',
    note: "Note 2",
    amount: 500,
    createdAt: 'November'
}

const expenseThree = {
    description: 'Expense 3',
    note: "Note 3",
    amount: 1000,
    createdAt: 'December'
}

database.push(database.ref(db, 'Expenses'), expenseOne);
database.push(database.ref(db, 'Expenses'), expenseTwo);
database.push(database.ref(db, 'Expenses'), expenseThree);


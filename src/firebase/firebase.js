import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBEPj6_C76hrySSrurVehrowJvfHTU8jsA",
    authDomain: "expensify-c151f.firebaseapp.com",
    databaseURL: "https://expensify-c151f.firebaseio.com",
    projectId: "expensify-c151f",
    storageBucket: "expensify-c151f.appspot.com",
    messagingSenderId: "1020788314109",
    appId: "1:1020788314109:web:72c517b5125683018f9394",
    measurementId: "G-4LKGN6MHXG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref().remove();

// database.ref('expense').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expense').push({
//     amount: 100,
//     note: "Something"
// });

// database.ref('expense').push({
//     amount: 120,
//     note: "Coffee"
// });

// database.ref('expense').push({
//     amount: 10,
//     note: "Chai"
// });
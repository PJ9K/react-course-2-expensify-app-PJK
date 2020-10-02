import * as firebase from 'firebase'   // import everyting from firebase and its methods and stuff


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()     // to log in with google

export { firebase, googleAuthProvider, database as default }









// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// }, (e) => {
//   console.log('Error zith data fetching', e)
// })



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,          // method from firebase, to get the key
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// })



// database.ref('expenses').push({
//   discriptioin: 'Rent',
//   note: 'Monthly rent',
//   amount: 500,
//   createdAt: '29 sep'
// })

// database.ref('notes/-MI8auVLiFlgiVBjOihi').remove()

// database.ref('notes').push({
//   title: 'course topics',
//   body: 'JS, python,'
// })

// const firebaseNotes = {    // to put an array into firebase, write it like this
//   notes: {
//     apoief: {
//       title: 'First note!',
//       body: 'this is my note'
//     },
//     asdflkje: {
//       title: 'Another note!',
//       body: 'this is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'this is my note'
// }, {
//   id: '761ase',
//   title: 'Another note!',
//   body: 'this is my note'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 7000)



// setTimeout(() => {
//   database.ref('age').set(40)
// }, 10500)


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching date', e)
//   })



// database.ref().set({
//   name: 'PJ Kindt',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'software dev',
//     company: 'google'
//   },  
//   location: {
//     city: 'Philadelpia',
//     country: 'Belgium'
//   },
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'Seattle'
// })

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   })

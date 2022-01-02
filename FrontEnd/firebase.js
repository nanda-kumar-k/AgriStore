import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBlmC9WE41oM2TAIlMKnWYPKxKExutFccc",
  authDomain: "agristore-phone-login.firebaseapp.com",
  projectId: "agristore-phone-login",
  storageBucket: "agristore-phone-login.appspot.com",
  messagingSenderId: "40829966212",
  appId: "1:40829966212:web:e2d7b281a4ac5f7ade2fd1",
  measurementId: "G-GG9NL4WF52"
}
firebase.initializeApp(config);
export default firebase;
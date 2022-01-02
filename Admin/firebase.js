// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv-RQxA7G0qSCqix02yzuIxzz_szLpI3A",
  authDomain: "agristore-53fbc.firebaseapp.com",
  projectId: "agristore-53fbc",
  storageBucket: "agristore-53fbc.appspot.com",
  messagingSenderId: "738629860966",
  appId: "1:738629860966:web:f9a1bec4746524a34d77a7",
  measurementId: "G-QQMM572DG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
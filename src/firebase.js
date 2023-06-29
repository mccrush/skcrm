import { initializeApp } from 'firebase/app'
import apiKey from './../apiKey'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain: "test19-3d743.firebaseapp.com",
  databaseURL: "https://test19-3d743.firebaseio.com",
  projectId: "test19-3d743",
  storageBucket: "test19-3d743.appspot.com",
  messagingSenderId: "884963151450",
  appId: "1:884963151450:web:5231789f10664e39",
  measurementId: "G-3EDPEDDP0Z"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig)

export default fireApp
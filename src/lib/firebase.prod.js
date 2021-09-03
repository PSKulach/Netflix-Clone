import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyApMCJs9PYFsU5BQGRhHkMSd27H8Z9z26o",
  authDomain: "netflix-4f6df.firebaseapp.com",
  projectId: "netflix-4f6df",
  storageBucket: "netflix-4f6df.appspot.com",
  messagingSenderId: "123689382159",
  appId: "1:123689382159:web:141fea67806e592f7f4e7a"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
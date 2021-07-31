import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { seedDatabase } from "../seed";

const config = {
	apiKey: "AIzaSyBxIbOxXDpZ6NmeBAKG5BPv8zcdcc6ERFE",
	authDomain: "zonkil-wip.firebaseapp.com",
	projectId: "zonkil-wip",
	storageBucket: "zonkil-wip.appspot.com",
	messagingSenderId: "1060411615711",
	appId: "1:1060411615711:web:2d33f3b9ffad5a47733c6a"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
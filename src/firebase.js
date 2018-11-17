import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyBRMTE40Xpo3WY3blfWQUyPKb4X03Jqhd0",
  authDomain: "slackclone-erwanriou.firebaseapp.com",
  databaseURL: "https://slackclone-erwanriou.firebaseio.com",
  projectId: "slackclone-erwanriou",
  storageBucket: "slackclone-erwanriou.appspot.com",
  messagingSenderId: "671937662673"
}
firebase.initializeApp(config)

export default firebase

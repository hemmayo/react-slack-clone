import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCNOgfc-lv875cX_AU9FjwSo-rtSCC5MQA",
  authDomain: "slack-clone-1413a.firebaseapp.com",
  databaseURL: "https://slack-clone-1413a.firebaseio.com",
  projectId: "slack-clone-1413a",
  storageBucket: "slack-clone-1413a.appspot.com",
  //   messagingSenderId: "sender-id",
  appID: "1:384988463045:web:81c3e57eabd864f1"
};

firebase.initializeApp(firebaseConfig);

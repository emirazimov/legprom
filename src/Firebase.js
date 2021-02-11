import React from 'react'
import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyCPMb_ANtyxvTzWMVYgRqqzWnxFmvhCA_c",
  authDomain: "admindashboard-7df9b.firebaseapp.com",
  databaseURL: "https://admindashboard-7df9b-default-rtdb.firebaseio.com",
  projectId: "admindashboard-7df9b",
  storageBucket: "admindashboard-7df9b.appspot.com",
  messagingSenderId: "587446494866",
  appId: "1:587446494866:web:67d90e3e0582f13a56a84b",
  measurementId: "G-D5YKGDZH8L"
}
firebase.initializeApp(config)

export default firebase
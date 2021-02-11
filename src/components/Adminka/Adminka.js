import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './PostList'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'
import onSubmit from '../Login/Login'
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

const config = {
  apiKey: "AIzaSyCPMb_ANtyxvTzWMVYgRqqzWnxFmvhCA_c",
  authDomain: "admindashboard-7df9b.firebaseapp.com",
  databaseURL: "https://admindashboard-7df9b-default-rtdb.firebaseio.com",
  projectId: "admindashboard-7df9b",
  storageBucket: "admindashboard-7df9b.appspot.com",
  messagingSenderId: "587446494866",
  appId: "1:587446494866:web:67d90e3e0582f13a56a84b",
  measurementId: "G-D5YKGDZH8L"
};

const options = {
  watch: ['posts', 'comments'],
  dontwatch: ['users']
}
const dataProvider = FirebaseDataProvider(config,options);




function Adminka() {
  return (
    <Admin dataProvider={dataProvider} >
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />

      {/* <Resource name='posts' list={PostInList} create={PostInCreate} edit={PostInEdit}/> */}
    </Admin>
  );
}

export default Adminka;
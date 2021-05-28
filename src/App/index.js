import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  AppNavbar,
} from '../components/instasham-design-system';
import './App.scss';
import { createUser, getUserByUid, getUsers } from '../helpers/userHelper';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          fullName: authed.displayName,
          username: authed.email.split('@')[0],
          uid: authed.uid,
          bio: '',
          profileImage: authed.photoURL,
        };
        getUsers().then((response) => {
          const userExists = response.filter((object) => object.uid === userInfo.uid);
          if (userExists.length === 0) {
            createUser(userInfo);
          } else {
            getUserByUid(userExists[0].uid).then(setUser);
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <>
    <div className='app-container'>
     <Router>
      <AppNavbar userInfo={user} />
      <Routes user={user} />
     </Router>
     </div>
    </>
  );
}

export default App;

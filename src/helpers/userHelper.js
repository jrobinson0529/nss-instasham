import firebase from 'firebase';
import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbURL = firebaseConfig.databaseURL;
const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;
const getUserByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)[0]))
    .catch((error) => reject(error));
});

const createUser = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/users.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/users/${response.data.name}.json`, body)
        .then((x) => resolve(x.data))
        .catch((error) => reject(error));
    });
});
// const getSingleUser = (id) => new Promise((resolve, reject) => {
//   axios.get(`${dbURL}/users/${id}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });
const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
export {
  getUserByUid,
  getCurrentUsersUid,
  getUsers,
  createUser
};

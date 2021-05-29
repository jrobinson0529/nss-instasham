import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;
const deletePost = (postId) => new Promise((resolve) => {
  // TODO: Delete Post based on postId
  resolve({ postId });
});
const getPosts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/posts.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  deletePost, getPosts
};

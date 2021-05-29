import React, { useEffect, useState } from 'react';
import PostDetailCard from '../components/instasham-design-system/PostDetailsCard';
import { getPosts } from '../helpers/postHelper';

function Feed() {
  const [allPosts, setAllPosts] = useState({});
  useEffect(() => {
    getPosts().then(setAllPosts);
  }, []);
  return (
    <div>
      {Object.values(allPosts)?.map((postInfo) => <PostDetailCard key={postInfo.firebaseKey} postInfo={postInfo}/>)}
    </div>
  );
}

export default Feed;

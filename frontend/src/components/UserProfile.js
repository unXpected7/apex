// src/components/UserProfile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

const UserProfile = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    axios.get(`/api/users/${user._id}/posts`).then((response) => setPosts(response.data));
    axios.get(`/api/users/${user._id}/isFollowing`).then((response) => setIsFollowing(response.data.isFollowing));
  }, [user._id]);

  const handleFollow = () => {
    axios.post(`/api/users/${user._id}/follow`).then(() => setIsFollowing(true));
  };

  const handleUnfollow = () => {
    axios.post(`/api/users/${user._id}/unfollow`).then(() => setIsFollowing(false));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{user.username}</h2>
      <img src={user.avatar} alt={`${user.username}'s avatar`} className="w-32 h-32 rounded-full mt-4" />
      <div className="mt-4">
        {isFollowing ? (
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleUnfollow}>Unfollow</button>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleFollow}>Follow</button>
        )}
      </div>
      <div className="mt-8">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};


export default UserProfile;






// src/App.js
import React from 'react';
import UserProfile from './components/UserProfile';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import Search from './components/Search';

const App = () => {
  const user = { username: 'JohnDoe', avatar: 'path/to/avatar.jpg' };

  return (
    <div>
      <Search
        onSearch={(query) => {
          console.log('Search query:', query);
        }}
      />
      <UserProfile user={user} />
      <CreatePost />
      <PostList />
    </div>
  );
};

export default App;

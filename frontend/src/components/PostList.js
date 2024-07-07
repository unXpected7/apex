import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
const BaseUrl = process.env.BASE_URL_API || 'http://localhost:5000';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios.get(`${BaseUrl}/api/posts?page=${page}`).then((response) => {
      setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
      setHasMore(response.data.hasMore);
    });
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div className="p-4">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

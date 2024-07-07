import React from 'react';

const PostItem = ({ post }) => (
  <div className="p-4 mb-4 bg-white rounded shadow">
    <h3 className="text-xl font-bold">{post.author.username}</h3>
    <p className="mt-2">{post.content}</p>
    <p className="mt-2 text-gray-500">Likes: {post.likes.length}</p>
  </div>
);

export default PostItem;

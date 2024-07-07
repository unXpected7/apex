import React, { useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import UserProfile from './UserProfile';
const BaseUrl = process.env.BASE_URL_API || 'http://localhost:5000';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`${BaseUrl}/api/search?q=${query}`).then((response) => setResults(response.data));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <form onSubmit={handleSearch} className="mb-4">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="w-full p-2 border rounded" 
          placeholder="Search for posts or users..." 
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Search</button>
      </form>
      <div>
        {results.map((result) => (
          result.type === 'post' ? <PostItem key={result._id} post={result} /> : <UserProfile key={result._id} user={result} />
        ))}
      </div>
    </div>
  );
};

export default Search;

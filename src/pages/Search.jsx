import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const Search = () => {
  const { query: initialQuery } = useParams();
  const [query, setQuery] = useState(initialQuery || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    if (query) {
      const fetchItems = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://recipes-blogs-backend.vercel.app/api/items`, {
            params: { q: query },
          });
          setResults(response.data);
        } catch (error) {
          setError(error.message || "Error fetching data");
        } finally {
          setLoading(false);
        }
      };
      fetchItems();
    }
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?query=${query}`);
  };

  console.log(results);
  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold secondary sm:text-6xl sm:leading-relaxed capitalize">
        Search
      </h1>
      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded flex items-center">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300" />
        
          <input
            type="search"
            name="query"
            placeholder="Search for a recipe"
            id="search"
            required=""
            value={query}
            onChange={handleSearch}
            className="outline-none w-full placeholder:text-[#1b2629]"
          />
      
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {results.map((item) => (
            <Card item={item} key={item._id}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

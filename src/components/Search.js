import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [results, setResults] = useState([]);
  const handleChangeText = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const SearchRequestWithSearchTerm = async () => {
    const BASE_URL = "https://en.wikipedia.org/w/api.php";
    const { data } = await axios.get(`${BASE_URL}`, {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: searchTerm,
      },
    });
    setResults(data.query.search);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      SearchRequestWithSearchTerm();
    }
  }, [debouncedTerm]);

  return (
    <div>
      <div className="ui form">
        <div className="search-bar ui field">
          <label>Search Term</label>
          <input className="input" onChange={handleChangeText}></input>
        </div>
      </div>
      <div className="ui celled list">
        {results.map((result) => {
          return (
            <div key={result.pageid} className="item">
              <div className="right floated content">
                <a
                  className="ui button"
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                  Go
                </a>
              </div>
              <div className="content">
                <div className="header">{result.title}</div>
              </div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import "./styles.css";

const Search = () => {
  return (
    <div className="searchBar_block">
      <input
        className="searchBar"
        type="search"
        placeholder="Search for users"
      />
    </div>
  );
};

export default Search;

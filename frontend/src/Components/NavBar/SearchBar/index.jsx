import React from "react";
import AppButton from "../../Button";
import "./styles.css";

const Search = () => {
  return (
    <div className="searchBar_block">
      <input
        className="searchBar"
        type="search"
        placeholder="Search for users"
      />
      <AppButton button_name={<i class='fa-solid fa-magnifying-glass'></i>}/>
    </div>
  );
};

export default Search;

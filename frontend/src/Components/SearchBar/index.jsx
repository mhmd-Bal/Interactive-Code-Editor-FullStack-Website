import React from "react";
import AppButton from "../Button";
import "./styles.css";
import { useState } from "react";

const Search = () => {

  return (
    <div className="searchBar_block">
      <input
        className="searchBar"
        type="search"
        placeholder="Search for users"
      />
      <AppButton button_name={<i className='fa-solid fa-magnifying-glass'></i>}/>
    </div>
  );
};

export default Search;

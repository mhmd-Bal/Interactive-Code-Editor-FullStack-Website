import React from "react";
import AppButton from "../Button";
import "./styles.css";
import { useState } from "react";

const Search = (props) => {

  return (
    <div className="searchBar_block">
      <input
        onChange={props.handleChange}
        className="searchBar"
        type="search"
        placeholder="Search for users"
      />
      <AppButton button_name={<i className='fa-solid fa-magnifying-glass'></i>} onClick={props.handleSearch}/>
    </div>
  );
};

export default Search;

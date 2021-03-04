import React from "react";
import "./seach.css";

const Search = () => {
  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search
          </span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search for employee:"
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default Search;

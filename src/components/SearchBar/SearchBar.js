import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";
function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <div className="d-flex">
          <div className="ml-4 mr-3" style={{ color: "#757575", marginTop: "2px" }}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input placeholder="Search products,customers & actions " className="input-search" />
        </div>
        <hr />
      </div>
    </>
  );
}

export default SearchBar;

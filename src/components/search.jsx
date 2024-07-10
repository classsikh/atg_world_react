import React from "react";
import SearchIcon from '@mui/icons-material/Search';
function Search() {
  return (
    <search >
      <div className="search">
      <SearchIcon className="icon" htmlColor="#9e9ea7" sx={{ fontSize: 22 }} />
       

        <input
          placeholder="Search for your favorite groups in ATG"
          type="search"
          className="input"
        />
      </div>
    </search>
  );
}

export default Search;

import React from "react";

const searchBar = (props) => {
  return (
    <input type="search" placeholder="Search" onChange={props.handleInput} />
  );
};

export default searchBar;

import React, { useState } from "react";
import { Input } from "reactstrap";

const Search = (props) => {
  const changeHandler = (e) => {
    e.preventDefault();
    props.onEnteredSearch(e.target.value);
  };

  return (
    <div>
      <Input placeholder="search" onKeyUp={changeHandler} />
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Tree from "./Tree";

import GetCollection from "../services/GetCollection";
import GetCollectionsById from "../services/GetCollectionById";

const Layout = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [enteredSearch, setEnteredSearch] = useState("");
  const { collections, isLoaded } = GetCollection();
  const { collectionsById, isLoadedById } = GetCollectionsById();
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (isLoaded && isLoadedById) {
      // filteredByType(selectedFilter);
      setFilteredList(collections.collection);
    }
  }, [isLoaded, isLoadedById, selectedFilter]);

  const selectedFilterHandler = (filter) => {
    setSelectedFilter(filter);
  };

  const searchHandler = (enteredSearchValue) => {
    setEnteredSearch(enteredSearchValue);
  };

  return (
    <>
      <Filter onFilterSelected={selectedFilterHandler} />
      <Search onEnteredSearch={searchHandler} />

      {isLoaded && isLoadedById ? (
        <Tree
          selectedFilter={selectedFilter}
          enteredSearch={enteredSearch}
          collections={collections}
          filteredList={filteredList}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Layout;

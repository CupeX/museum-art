import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Tree from "./Tree";

import GetCollection from "../services/GetCollection";
import GetCollectionsById from "../services/GetCollectionById";
import { Card, CardGroup } from "reactstrap";
import ArtPreview from "./ArtPreview";

const Layout = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [enteredSearch, setEnteredSearch] = useState("");
  const [artSelected, setArtSelected] = useState("");
  const { collections, isLoaded } = GetCollection();
  const { collectionsById, isLoadedById } = GetCollectionsById();
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (isLoaded && isLoadedById) {
      filteredByType(selectedFilter);
      setFilteredList(collections.collection);
    }
  }, [isLoaded, isLoadedById, selectedFilter]);

  const selectedFilterHandler = (filter) => {
    setSelectedFilter(filter);
  };

  const searchHandler = (enteredSearchValue) => {
    setEnteredSearch(enteredSearchValue);
  };

  const artPreviewHandler = (artId) => {
    setArtSelected(artId);
  };

  // console.log(collections);

  const filteredByType = (selectedFilter) => {
    setFilteredList(
      filteredList.filter((x) =>
        console.log(x.collection.filter((y) => y.type === selectedFilter))
      )
    );
  };
  // console.log(filteredList);

  // const filteredByType = (selectedFilter) => {
  //   setFilteredList(
  //     filteredList.filter((x) => {
  //       return x.collection.filter((y) => y.type === selectedFilter);
  //     })
  //   );
  // };

  return (
    <CardGroup>
      <Card>
        <Filter onFilterSelected={selectedFilterHandler} />
        <Search onEnteredSearch={searchHandler} />

        {isLoaded && isLoadedById ? (
          <Tree
            selectedFilter={selectedFilter}
            enteredSearch={enteredSearch}
            collections={collections}
            filteredList={filteredList}
            onArtPreviewClick={artPreviewHandler}
          />
        ) : (
          ""
        )}
      </Card>
      <Card>
        <ArtPreview
          artSelected={artSelected}
          collectionsById={collectionsById}
        />
      </Card>
    </CardGroup>
  );
};

export default Layout;

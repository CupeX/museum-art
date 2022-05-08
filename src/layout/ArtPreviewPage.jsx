import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Tree from "../components/Tree";

import GetCollection from "../services/GetCollection";
import GetCollectionsById from "../services/GetCollectionById";
import { Card, CardGroup } from "reactstrap";
import ArtPreview from "../components/ArtPreview";

const ArtPreviewPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [enteredSearch, setEnteredSearch] = useState("");
  const [artSelected, setArtSelected] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { collections, isLoaded } = GetCollection();
  const { collectionsById, isLoadedById } = GetCollectionsById();

  useEffect(() => {
    if (isLoaded && isLoadedById) {
      // filteredByType(selectedFilter);
      setFilteredList(collections.collection);
      // setFilteredList(
      //   collections.collection.filter((x) =>
      //     console.log(x.collection.filter((y) => y.type === selectedFilter))
      //   )
      // );
    }
  }, [isLoaded, isLoadedById, selectedFilter]);
  // console.log("filtered list:", filteredList);

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

  // const filteredByType = (selectedFilter) => {};

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

export default ArtPreviewPage;

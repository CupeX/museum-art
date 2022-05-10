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
      const dataListCopy = JSON.parse(JSON.stringify(collections.collection));
      setFilteredList(dataListCopy);

      setFilteredList(
        dataListCopy.map((x) => {
          if (selectedFilter !== "all") {
            x.collection = x.collection.filter(
              (y) => y.type === selectedFilter
            );
            return x;
          }
          return x;
        })
      );
    }
  }, [isLoaded, isLoadedById, selectedFilter, collections, collectionsById]);

  const filterBySearch = (enteredSearchValue) => {
    const dataListCopy = JSON.parse(JSON.stringify(collections.collection));

    if (selectedFilter !== "all") {
      let test1 = filteredList.map((x) => {
        x.collection = x.collection.filter((y) =>
          y.name.includes(enteredSearchValue)
        );
        return x;
      });
      setFilteredList(test1);
    } else {
      let test = dataListCopy.map((x) => {
        x.collection = x.collection.filter((y) =>
          y.name.includes(enteredSearchValue)
        );
        return x;
      });
      setFilteredList(test);
    }
  };

  const selectedFilterHandler = (filter) => {
    setSelectedFilter(filter);
  };

  const searchHandler = (enteredSearchValue) => {
    setEnteredSearch(enteredSearchValue);
    filterBySearch(enteredSearchValue);
  };

  const artPreviewHandler = (artId) => {
    setArtSelected(artId);
  };

  return (
    <CardGroup className="m-3 ">
      <Card className="p-3" style={{ maxWidth: "320px" }}>
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
      <Card className="p-3" style={{ height: "95vh" }}>
        <ArtPreview
          artSelected={artSelected}
          collectionsById={collectionsById}
        />
      </Card>
    </CardGroup>
  );
};

export default ArtPreviewPage;

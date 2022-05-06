import React, { useState } from "react";

const Tree = (props) => {
  console.log("tree props:", props);
  const { selectedFilter, enteredSearch, filteredList, collections } = props;

  return (
    <>
      <ul>
        <li>{collections.name}</li>
        <ul>
          {filteredList.map((collectionItem) => (
            <li key={collectionItem.id}>
              {collectionItem.name}
              <ul>
                {collectionItem.collection.map((collectionItemInside) => (
                  <li key={collectionItemInside.id}>
                    <a href="#">{collectionItemInside.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
};

export default Tree;

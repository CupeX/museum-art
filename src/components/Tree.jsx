import React from "react";
import { Button } from "reactstrap";

const Tree = (props) => {
  const { selectedFilter, enteredSearch, filteredList, collections } = props;

  const artPreviewClicker = (e) => {
    props.onArtPreviewClick(e.target.value);
  };

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
                    <Button
                      style={{
                        outline: "none",
                        color: "black",
                        background: "none",
                        border: "none",
                      }}
                      value={collectionItemInside.id}
                      onClick={(e) => artPreviewClicker(e)}
                    >
                      {collectionItemInside.name}
                    </Button>
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

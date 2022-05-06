import React, { useEffect, useState } from "react";

const GetCollectionsById = () => {
  const [collectionsById, setCollectionsById] = useState([]);
  const [isLoadedById, setIsLoadedById] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/collection")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCollectionsById(data);
        setIsLoadedById(true);
      });
  }, []);

  return { collectionsById, isLoadedById };
};

export default GetCollectionsById;

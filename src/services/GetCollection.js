import React, { useEffect, useState } from "react";

const GetCollection = () => {
  const [collections, setCollections] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/tree")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCollections(data);
        setIsLoaded(true);
      });
  }, []);

  return { collections, isLoaded };
};

export default GetCollection;

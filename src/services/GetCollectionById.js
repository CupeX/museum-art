import React, { useEffect, useState, useCallback } from "react";

const GetCollectionsById = () => {
  const [collectionsById, setCollectionsById] = useState([]);
  const [isLoadedById, setIsLoadedById] = useState(false);
  const [error, setError] = useState(null);

  const fetchCollectionsById = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3001/collection");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setCollectionsById(data);
      setIsLoadedById(true);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchCollectionsById();
  }, [fetchCollectionsById]);

  return { collectionsById, isLoadedById };
};

export default GetCollectionsById;

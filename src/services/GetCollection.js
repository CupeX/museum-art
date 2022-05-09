import React, { useCallback, useEffect, useState } from "react";

const GetCollection = () => {
  const [collections, setCollections] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchCollections = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/tree");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setCollections(data);
      setIsLoaded(true);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return { collections, isLoaded };
};

export default GetCollection;

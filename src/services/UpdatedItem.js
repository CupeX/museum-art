import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const UpdateItem = () => {
  const [error, setError] = useState(null);

  const updateItemHandler = async (newData) => {
    const id = newData.id;
    try {
      const response = await fetch(`http://localhost:3001/collection/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { updateItemHandler };
};

export default UpdateItem;

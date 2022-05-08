import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import GetCollectionsById from "../services/GetCollectionById";

const ArtEditPage = () => {
  const { id } = useParams();
  const { collectionsById, isLoadedById } = GetCollectionsById();

  const selectedArt = collectionsById.find((item) => item.id === id);

  console.log(selectedArt);

  return <>{isLoadedById ? <EditForm selectedArt={selectedArt} /> : ""}</>;
};

export default ArtEditPage;

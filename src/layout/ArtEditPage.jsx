import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardGroup } from "reactstrap";
import ArtEditPreview from "../components/ArtEditPreview";
import ArtPreview from "../components/ArtPreview";
import EditForm from "../components/EditForm";
import GetCollectionsById from "../services/GetCollectionById";

const ArtEditPage = () => {
  const [previewData, setPreviewData] = useState();
  const { id } = useParams();
  const { collectionsById, isLoadedById } = GetCollectionsById();

  const selectedArt = collectionsById.find((item) => item.id === id);

  const editPreviewClicked = (data) => {
    setPreviewData(data);
  };

  return (
    <>
      {isLoadedById ? (
        <CardGroup>
          <Card>
            <EditForm
              selectedArt={selectedArt}
              onEditPreview={editPreviewClicked}
            />
          </Card>
          <Card>
            {previewData ? <ArtEditPreview previewData={previewData} /> : ""}
          </Card>
        </CardGroup>
      ) : (
        ""
      )}
    </>
  );
};

export default ArtEditPage;

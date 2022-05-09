import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const ArtEditPreview = ({ previewData }) => {
  return (
    <>
      <CardImg
        alt="Card image cap"
        src={previewData.url}
        top
        style={{ width: "fit-content", maxHeight: "40%", maxWidth: "100%" }}
        className="mx-auto"
      />
      <CardBody>
        <CardTitle tag="h5">{previewData.name}</CardTitle>
        <CardText>{previewData.description}</CardText>
      </CardBody>
    </>
  );
};

export default ArtEditPreview;

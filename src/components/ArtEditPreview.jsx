import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const ArtEditPreview = ({ previewData }) => {
  return (
    <>
      <Card>
        <CardImg alt="Card image cap" src={previewData.url} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{previewData.name}</CardTitle>
          <CardText>{previewData.description}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default ArtEditPreview;

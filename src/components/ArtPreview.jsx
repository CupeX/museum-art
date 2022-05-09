import React from "react";
import { Link } from "react-router-dom";
import { Button, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const ArtPreview = (props) => {
  const { artSelected, collectionsById } = props;

  const selectedArt = collectionsById.find((artId) => artId.id === artSelected);

  return (
    <>
      {artSelected ? (
        <>
          <CardImg
            alt="Card image cap"
            src={selectedArt.url}
            top
            style={{ width: "fit-content", maxHeight: "40%", maxWidth: "100%" }}
            className="mx-auto"
          />
          <CardBody>
            <div className="d-flex justify-content-between pb-3">
              <CardTitle tag="h5">{selectedArt.name}</CardTitle>

              <Link to={`/artedit/${artSelected}`}>
                <Button color="primary">edit</Button>
              </Link>
            </div>

            <CardText>{selectedArt.description}</CardText>
          </CardBody>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ArtPreview;

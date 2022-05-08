import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const ArtPreview = (props) => {
  const { artSelected, collectionsById } = props;

  const selectedArt = collectionsById.find((artId) => artId.id === artSelected);

  const onEditClicked = () => {
    props.onEditArt();
  };

  return (
    <>
      {artSelected ? (
        <Card>
          <CardImg
            alt="Card image cap"
            src={selectedArt.url}
            top
            width="100%"
          />
          <CardBody>
            <div className="d-flex justify-content-between pb-3">
              <CardTitle tag="h5">{selectedArt.name}</CardTitle>

              <Link to={`/artedit/${artSelected}`}>
                <Button color="primary" onClick={onEditClicked}>
                  edit
                </Button>
              </Link>
            </div>

            <CardText>{selectedArt.description}</CardText>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default ArtPreview;

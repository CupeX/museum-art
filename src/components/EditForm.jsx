import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import UpdateItem from "../services/UpdatedItem";

const EditForm = (props) => {
  const { selectedArt } = props;
  const [name, setName] = useState(selectedArt.name);
  const [url, setUrl] = useState(selectedArt.url);
  const [description, setDescription] = useState(selectedArt.description);

  const { updateItemHandler } = UpdateItem();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const updateData = {
      name,
      url,
      description,
      id: selectedArt.id,
      type: selectedArt.type,
    };

    updateItemHandler(updateData);
  };

  const editPreviewHandler = () => {
    props.onEditPreview({ name, url, description });
  };

  return (
    <Form className="w-50 m-3" method="POST" onSubmit={formSubmitHandler}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="title"
          name="title"
          id="title"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="imgUrl">Image URL</Label>
        <Input
          type="url"
          name="imgUrl"
          id="imgUrl"
          defaultValue={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          rows={10}
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="with a placeholder"
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Save
      </Button>
      <Button onClick={editPreviewHandler}>Preview</Button>
    </Form>
  );
};

export default EditForm;

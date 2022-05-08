import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const EditForm = (props) => {
  const { selectedArt } = props;

  return (
    <Form className="w-50 m-3">
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="title"
          name="title"
          id="title"
          defaultValue={selectedArt.name}
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="imgUrl">Image URL</Label>
        <Input
          type="url"
          name="imgUrl"
          id="imgUrl"
          defaultValue={selectedArt.url}
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
          defaultValue={selectedArt.description}
          placeholder="with a placeholder"
        />
      </FormGroup>
      <Button color="primary">Save</Button>
    </Form>
  );
};

export default EditForm;

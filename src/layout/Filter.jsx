import React from "react";
import { Col, Input, Label, FormGroup } from "reactstrap";

const Filter = (props) => {
  const onSelect = (e) => {
    props.onFilterSelected(e.target.value);
  };

  return (
    <FormGroup row tag="fieldset">
      <legend className="col-form-label col-sm-2 d-flex"></legend>
      <Col sm={100}>
        <FormGroup inline check>
          <Input
            name="radio"
            value="all"
            type="radio"
            onChange={(e) => onSelect(e)}
          />{" "}
          <Label check>All</Label>
        </FormGroup>
        <FormGroup inline check>
          <Input
            name="radio"
            value="painting"
            type="radio"
            onChange={(e) => onSelect(e)}
          />{" "}
          <Label check>Painting</Label>
        </FormGroup>
        <FormGroup inline check disabled>
          <Input
            name="radio"
            value="potery"
            type="radio"
            onChange={(e) => onSelect(e)}
          />{" "}
          <Label check>Potteries</Label>
        </FormGroup>
      </Col>
    </FormGroup>
  );
};

export default Filter;

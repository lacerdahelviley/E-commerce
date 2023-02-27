import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

export function Title ({title, Style}){
    return <h3 className={Style.form__title}>{title}</h3>
}

export function FormFields({ placeholder, disabled }) {
  return (
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Control type="text" placeholder={placeholder} disabled={disabled} />
    </Form.Group>
  );
}

export function ColFields({ Style, placeholder, unidadeMedida }) {
  return (
    <Col xs="auto" className={Style.col}>
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        placeholder={placeholder}
      </Form.Label>
      <InputGroup className="mb-2">
        <Form.Control id="inlineFormInputGroup" placeholder={placeholder} />
        <InputGroup.Text>{unidadeMedida}</InputGroup.Text>
      </InputGroup>
    </Col>
  );
}

export function TextArea({ Style, placeholder, label }) {
  return (
    <FloatingLabel
      controlId="floatingTextarea2"
      label={label}
      className={Style.form__control}
    >
      <Form.Control
        as="textarea"
        placeholder={placeholder}
        style={{ height: "60px", width: "100%" }}
        className={Style.form__control__size}
      />
    </FloatingLabel>
  );
}

export function ImageSelector({ label }) {
  return (
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label> {label} </Form.Label>
      <Form.Control type="file" multiple />
    </Form.Group>
  );
}

export function Buttons({ type, variant, name }) {
  return (
    <Button type={type} variant={variant}>
      {name}
    </Button>
  );
}

import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

export function Title({ title, Style }) {
  return <h3 className={Style.form__title}>{title}</h3>;
}

export function FormFields({ placeholder, value, onChange, disabled, type, name }) {
  return (
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export function ColFields({
  Style,
  value,
  onChange,
  placeholder,
  unidadeMedida,
}) {
  return (
    <Col xs="auto" className={Style.col}>
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        placeholder={placeholder}
      </Form.Label>
      <InputGroup className="mb-2">
        <Form.Control
          value={value}
          onChange={onChange}
          id="inlineFormInputGroup"
          placeholder={placeholder}
        />
        <InputGroup.Text>{unidadeMedida}</InputGroup.Text>
      </InputGroup>
    </Col>
  );
}

export function TextArea({ Style, value, onChange, placeholder, label }) {
  return (
    <FloatingLabel
      controlId="floatingTextarea2"
      label={label}
      className={Style.form__control}
    >
      <Form.Control
        value={value}
        onChange={onChange}
        as="textarea"
        placeholder={placeholder}
        style={{ height: "60px", width: "100%" }}
        className={Style.form__control__size}
      />
    </FloatingLabel>
  );
}

export function ImageSelector({ label, value, onChange }) {
  return (
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label> {label} </Form.Label>
      <Form.Control value={value} onChange={onChange} type="file" multiple />
    </Form.Group>
  );
}

export function Buttons({ type, variant, name, onClick, Style }) {
  return (
    <Button type={type} variant={variant} onClick={onClick} Style={Style}>
      {name}
    </Button>
  );
}

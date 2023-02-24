import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Style from "./login.module.scss";

export default function Login() {
  const [isShowPassword, setShowPassword] = useState(false);
  const [isPassword, setPassword] = useState("");
  const [isEmail, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked);
  };

  const logon = () => {
    if (isEmail === "user@tora.com.br" && isPassword === "123456*e") {
      <NavLink to="home" />;
      console.log("TESTE");
    } else {
      console.log("Email ou senha incorretos");
    }
  };

  return (
    <div className={Style.main}>
      <Form className={Style.container__form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço de e-mail</Form.Label>
          <Form.Control
            type="email"
            value={isEmail}
            placeholder="Insira seu e-mail"
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            Nunca compartilhe seu endereço de e-mail com outros.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type={isShowPassword ? "text" : "password"}
            value={isPassword}
            onChange={handlePasswordChange}
            placeholder="Insira sua senha"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className={Style.Check}
            type="checkbox"
            checked={isShowPassword}
            onChange={handleCheckboxChange}
            label="Mostrar senha"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={logon}>
          <NavLink to="/">Login</NavLink>
        </Button>
      </Form>
    </div>
  );
}

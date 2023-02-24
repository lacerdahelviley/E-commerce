
import Burger from "components/menuBurger";
import React from "react";
import RegistrationForm from "./registrationForm";

export default function VehicleRegistration({open, setOpen}) {
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <RegistrationForm />
    </>
  );
}

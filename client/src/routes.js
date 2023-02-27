import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "components/login";
import Home from "components/home";
import VehicleRegistration from "components/vehicleRegistration";
import Container from "components/container";
import SalesRegister from "components/salesRegister";

const Way = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home open={open} setOpen={setOpen} />} path="/">
            <Route element={<Container />} index />
            <Route
              element={<VehicleRegistration open={open} setOpen={setOpen} />}
              path="/vehicleRegistration"
            />
            <Route
              element={<SalesRegister open={open} setOpen={setOpen} />}
              path="/salesRegister"
            />
          </Route>
        </Routes>
        <Routes>
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Way;

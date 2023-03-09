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
          <Route path="/" element={<Home open={open} setOpen={setOpen} />}>
            <Route index element={<Container />} />
            <Route path="vehicleRegistration" element={<VehicleRegistration open={open} setOpen={setOpen} />} />
            <Route path="salesRegister" element={<SalesRegister open={open} setOpen={setOpen} />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Way;

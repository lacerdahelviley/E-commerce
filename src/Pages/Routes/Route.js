import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import NavBar from "../../components/navbar";

import Home from "../home/Index";
import Login from "../login/Index";
import Registration from "../registration_screen/index";
import SalesVehicle from "../vehicle_sales/index";
import SalesVehicleInfo from "../vehicle_sales/AdditionalInfo";

const ApplicationRoutes = () => {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<Login />} path="/login/Index" />
          <Route element={<Registration />} path="/registration_screen/index" />
          <Route element={<SalesVehicle />} path="/vehicle_sales/index" />
          <Route
            component={SalesVehicleInfo}
            path="/vehicle_sales/AdditionalInfo"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ApplicationRoutes;

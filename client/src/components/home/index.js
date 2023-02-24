import React from "react";
import Burger from "components/menuBurger";
import { Outlet } from "react-router-dom";

function Home({open, setOpen}) {
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Outlet />
    </>
  );
}
export default Home;

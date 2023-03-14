import React from "react";
import Burger from "components/menuBurger";
import { Outlet } from "react-router-dom";
import Footer from "components/footer";

function Home({open, setOpen}) {
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </>
  );
}
export default Home;

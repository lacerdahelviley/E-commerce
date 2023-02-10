import React from "react";
import Style from "./home.module.scss";
import veiculos from "./veiculos.json";
import Burger from "../menuBurger";
import CheckboxFilter from "./checkboxFilter/index";
import Card from "./card";

function Home() {
  
 return (
    <>
      <Burger />
      <div className={Style.container}>
        <CheckboxFilter style={Style} veiculos={veiculos} />
        <Card Style={Style} veiculos={veiculos} />
      </div>
    </>
  );
}
export default Home;

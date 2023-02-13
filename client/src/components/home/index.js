import React, { useState } from "react";
import Style from "./home.module.scss";
import Burger from "../menuBurger";
import CheckboxFilter from "./checkboxFilter/index";
import Card from "./card";
import veiculos from "./veiculos.json";

function Home() {
  const [isVeiculos, setVeiculos] = useState(veiculos);
  const automoveis = [...new Set(veiculos.map((item) => item.marca))];

  const filtrarVeiculos = (marca) => {
    const veiculoFiltrado = veiculos.filter((item) => item.marca === marca);
    setVeiculos(veiculoFiltrado);
  };

  return (
    <>
      <Burger />
      <div className={Style.container}>
        <CheckboxFilter
          style={Style}
          automoveis={automoveis}
          veiculos={veiculos}
          setVeiculos={setVeiculos}
          filtrarVeiculos={filtrarVeiculos}
        />
        <Card Style={Style} veiculos={isVeiculos} />
      </div>
    </>
  );
}
export default Home;

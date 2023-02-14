import React, { useState } from "react";
import Style from "./home.module.scss";
import Burger from "../menuBurger";
import CheckboxFilter from "./checkboxFilter/index";
import Card from "./card";
import veiculos from "./veiculos.json";


function Home() {
  const [isVeiculos] = useState(veiculos);
  const [isVeiculoFiltrado, setVeiculoFiltrado] = useState([]);
  const automoveis = [...new Set(veiculos.map((item) => item.marca))];

  const filtrarVeiculos = (marca) => {
    if (isVeiculos) {
      const resultado = veiculos.filter((item) => item.marca === marca);
      setVeiculoFiltrado([...isVeiculoFiltrado, ...resultado])
    }
  };

  return (
    <>
      <Burger />
      <div className={Style.container}>
        <CheckboxFilter
          style={Style}
          automoveis={automoveis}
          isVeiculoFiltrado={isVeiculoFiltrado}
          setVeiculoFiltrado={setVeiculoFiltrado}
          filtrarVeiculos={filtrarVeiculos}
        />
        <Card Style={Style} veiculos={isVeiculoFiltrado} />
      </div>
    </>
  );
}
export default Home;

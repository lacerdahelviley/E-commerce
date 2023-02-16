import React, { useState } from "react";
import Style from "./home.module.scss";
import Burger from "components/menuBurger";
import Card from "./card";
import veiculos from "./veiculos.json";
import CheckboxFilter from "./checkboxFilter";

function Home() {
  const [isVeiculos] = useState(veiculos);
  const [isVeiculoFiltrado, setVeiculoFiltrado] = useState(isVeiculos);
  const [isContadorVeiculos, setContadorVeiculos] = useState(0);
  const automoveis = [...new Set(veiculos.map((item) => item.marca))];

  const filtrarVeiculos = (marca) => {
    if (marca === "ResetViews") {
      setVeiculoFiltrado(console.log(veiculos));
    } else {
      if (isVeiculoFiltrado) {
        const resultado = veiculos.filter((item) => item.marca === marca);
        if (isContadorVeiculos === 0) {
          setContadorVeiculos(isContadorVeiculos + 1);
          setVeiculoFiltrado(resultado);
          return;
        }
        setVeiculoFiltrado([...isVeiculoFiltrado, ...resultado]);
      }
    }
    // console.log(isVeiculoFiltrado)
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

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

  const filtrarVeiculos = (marca, resultado) => {
    if (marca === "ResetViews") {
      setVeiculoFiltrado([...resultado]);
      if (isContadorVeiculos === 1) {
        setContadorVeiculos(isContadorVeiculos - 1);
      }
      if (resultado.length === 0) {
        setVeiculoFiltrado([...isVeiculos]);
      }
    } else {
      const resultado = veiculos.filter((item) => item.marca === marca);
      setVeiculoFiltrado(resultado);
      if (isVeiculoFiltrado) {
        if (isContadorVeiculos === 0) {
          setContadorVeiculos(isContadorVeiculos + 1);
          return;
        }
        setVeiculoFiltrado([...isVeiculoFiltrado, ...resultado]);
      }
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

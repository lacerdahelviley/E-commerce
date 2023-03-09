import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./container.module.scss";
import CheckboxFilter from "./checkboxFilter";
import Card from "./card";

export default function Container() {
  const [veiculos, setVeiculos] = useState([]);
  const [veiculosFiltrados, setVeiculosFiltrados] = useState(veiculos);
  const [contadorVeiculosFiltrados, setContadorVeiculosFiltrados] = useState(0);
  const marcasAutomoveis = [...new Set(veiculos.map((item) => item.marca))];
  useEffect(() => {
    axios
      .get("http://localhost:4000/veiculos")
      .then((res) => {
        setVeiculos(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filtrarVeiculos = (marcaSelecionada, resultadoFiltro) => {
    if (marcaSelecionada === "ResetViews") {
      setVeiculosFiltrados([...resultadoFiltro]);
      if (contadorVeiculosFiltrados === 1) {
        setContadorVeiculosFiltrados(contadorVeiculosFiltrados - 1);
      }
      if (resultadoFiltro.length === 0) {
        setVeiculosFiltrados([...veiculos]);
      }
    } else {
      const veiculosFiltradosPorMarca = veiculos.filter(
        (item) => item.marca === marcaSelecionada
      );
      setVeiculosFiltrados(veiculosFiltradosPorMarca);
      if (veiculosFiltrados) {
        if (contadorVeiculosFiltrados === 0) {
          setContadorVeiculosFiltrados(contadorVeiculosFiltrados + 1);
          return;
        }
        setVeiculosFiltrados([
          ...veiculosFiltrados,
          ...veiculosFiltradosPorMarca,
        ]);
      }
    }
  };

  return (
    <div className={Style.container}>
      <CheckboxFilter
        style={Style}
        automoveis={marcasAutomoveis}
        veiculosFiltrados={veiculosFiltrados}
        setVeiculosFiltrados={setVeiculosFiltrados}
        filtrarVeiculos={filtrarVeiculos}
      />
      <Card style={Style} veiculos={veiculosFiltrados} />
    </div>
  );
}

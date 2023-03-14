import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./container.module.scss";
import Card from "./card";
import SwitchButton from "components/switchButton";
import { ControlledCarousel } from "components/carousel";

export default function Container() {
  const [veiculos, setVeiculos] = useState([]);
  const [veiculosFiltrados, setVeiculosFiltrados] = useState(veiculos);
  const [contadorVeiculosFiltrados, setContadorVeiculosFiltrados] = useState(0);
  const marcasAutomoveis = [...new Set(veiculos.map((item) => item.marca))];

  useEffect(() => {
    axios
      .get("http://localhost:4000/veiculo/list")
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
        setContadorVeiculosFiltrados(
          contadorVeiculosFiltrados - 1,
          ...resultadoFiltro
        );
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
      <SwitchButton
        style={Style}
        automoveis={marcasAutomoveis}
        veiculosFiltrados={veiculosFiltrados}
        setVeiculosFiltrados={setVeiculosFiltrados}
        filtrarVeiculos={filtrarVeiculos}
      />
      <div className={Style.carousel}>
        <ControlledCarousel />
        <Card style={Style} veiculos={veiculosFiltrados} />
      </div>
    </div>
  );
}

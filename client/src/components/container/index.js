import React, { useState } from 'react'
import veiculos from "components/json/veiculos.json"
import Style from "./container.module.scss"
import CheckboxFilter from './checkboxFilter';
import Card from './card';

export default function Container() {
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
  )
}

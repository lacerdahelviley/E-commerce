import React from "react";
import Aside from "../../aside";

export default function CheckboxFilter({
  style,
  isVeiculoFiltrado,
  setVeiculoFiltrado,
  automoveis,
  filtrarVeiculos,
}) {
  return (
    <div className={style.filtro}>
      {automoveis.map((marca, index) => (
        <Aside
          key={marca + index}
          isVeiculoFiltrado={isVeiculoFiltrado}
          setVeiculoFiltrado={setVeiculoFiltrado}
          marca={marca}
          filtrarVeiculos={filtrarVeiculos}
          automoveis={automoveis}
        />
      ))}
    </div>
  );
}

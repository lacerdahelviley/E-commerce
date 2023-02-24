import React from "react";
import Aside from "components/aside";

export default function CheckboxFilter({
  style,
  isVeiculoFiltrado,
  setVeiculoFiltrado,
  automoveis,
  filtrarVeiculos,
}) {
  return (
    <div className={style.filtro}>
      <label className={style.borda__filtro}>
        <h3 className={style.titulo__filtro}>
        Marca
        </h3>
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
      </label>
    </div>
  );
}

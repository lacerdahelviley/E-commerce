import React from "react";
import Aside from "../../aside";

export default function CheckboxFilter({
  style,
  setVeiculos,
  automoveis,
  filtrarVeiculos,
}) {
  return (
    <div className={style.filtro}>
      {automoveis.map((marca, index) => (
        <Aside
          key={marca + index}
          setVeiculos={setVeiculos}
          marca={marca}
          filtrarVeiculos={filtrarVeiculos}
          automoveis={automoveis}
        />
      ))}
    </div>
  );
}

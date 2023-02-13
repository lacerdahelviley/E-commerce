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
      {automoveis.map((marca) => (
        <Aside marca={marca} onClick={() => filtrarVeiculos(marca)}/>
      ))}
    </div>
  );
}

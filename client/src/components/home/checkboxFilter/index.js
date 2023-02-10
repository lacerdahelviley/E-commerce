import React from 'react'
import Aside from '../../aside';


export default function CheckboxFilter({style, veiculos}) {

    const setVeiculo = new Set();
    const DadosCheckbox = veiculos.filter((veiculo) => {
      const MarcaDuplicada = setVeiculo.has(veiculo.marca);
      setVeiculo.add(veiculo.marca);
      return !MarcaDuplicada;
    });
  
    return (
    <div className={style.filtro}>
    {DadosCheckbox.map((veiculo) => (
      <Aside marca={veiculo.marca} />
    ))}
  </div>
  )
}

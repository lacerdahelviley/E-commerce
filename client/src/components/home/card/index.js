import React from "react";
import Cards from "../../cards";


export default function Card({Style, veiculos}) {
  return (
    <div className={Style.container__conteudo}>
      {veiculos.map((veiculo) => (
        <Cards
          key={veiculo.nome}
          nome={veiculo.nome}
          ano={veiculo.ano}
          imagem={veiculo.imagem}
          valor={veiculo.valor}
        />
      ))}
    </div>
  );
}

import React from "react";
import Cards from "components/cards";


export default function Card({Style, veiculos}) {
  return (
    <div className={Style.container__conteudo}>
      {veiculos.map((veiculo, index) => (
        <Cards
          key={veiculo.nome + index}
          nome={veiculo.nome}
          ano={veiculo.ano}
          imagem={veiculo.imagem}
          valor={veiculo.valor}
        />
      ))}
    </div>
  );
}

import React, { useState } from "react";
import CardModal from "components/modal";
import style from "./card.module.scss";

const Cards = ({ veiculo, nome, ano, imagem, valor }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={style.container__card} onClick={() => setShow(true)}>
        <div className={style.card__header}>
          <img src={imagem} alt={nome} />
        </div>
        <div className={style.card__footer}>
          <h2>{nome}</h2>
          <h3>{ano}</h3>
          <h3>{valor}</h3>
        </div>
      </div>
      <CardModal show={show} setShow={setShow} onHide={false} veiculo={veiculo} />
    </>
  );
};
export default Cards;

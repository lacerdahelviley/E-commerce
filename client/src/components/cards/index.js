import style from "./card.module.scss";

const Cards = ({ nome, ano, imagem, valor }) => {
  return (
    <>
      <div className={style.container__card}>
        <div className={style.card__header}>
          <img src={imagem} alt={nome} />
        </div >
        <div className={style.card__footer}>
          <h2>{nome}</h2>
          <h3>{ano}</h3>
          <h3>{valor}</h3>
        </div >
      </div >
    </>
  );
};
export default Cards;

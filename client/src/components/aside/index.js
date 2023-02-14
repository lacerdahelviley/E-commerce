import style from "./aside.module.scss";
// import veiculos from "../home/veiculos.json"

const Aside = ({
  marca,
  filtrarVeiculos,
  isVeiculoFiltrado,
  setVeiculoFiltrado,
}) => {
  return (
    <div className={style.container}>
      <label>
        <input
          className={style.checkbox}
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              filtrarVeiculos(marca);
            } else {
              const resultado = isVeiculoFiltrado.filter(
                (item) => item.marca !== marca
              );
              setVeiculoFiltrado([...resultado]);
            }
          }}
        />
        {marca}
      </label>
    </div>
  );
};
export default Aside;

import style from "./aside.module.scss";

const Aside = ({
  marca,
  filtrarVeiculos,
  veiculoFiltrado,
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
              const resultadoFiltro = veiculoFiltrado.filter(
                (item) => item.marca !== marca
              );
              filtrarVeiculos("ResetViews", resultadoFiltro);
            }
          }}
        />
        {marca}
      </label>
    </div>
  );
};
export default Aside;

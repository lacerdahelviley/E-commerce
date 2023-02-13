import style from "./aside.module.scss";
import veiculos from "../home/veiculos.json"

const Aside = ({ marca, filtrarVeiculos, setVeiculos }) => {
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
                console.log(veiculos)
              return setVeiculos(veiculos);
            }
          }}
        />
        {marca}
      </label>
    </div>
  );
};
export default Aside;

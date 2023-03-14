import Form from "react-bootstrap/Form";
import style from "./aside.module.scss";

const Aside = ({ marca, filtrarVeiculos, veiculosFiltrados }) => {
  
  return (
    <div className={style.container}>
      <label>
      {marca}
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            className={style.checkbox}
            onChange={(e) => {
              if (e.target.checked) {
                filtrarVeiculos(marca);
              } else {
                const resultadoFiltro = veiculosFiltrados.filter(
                  (item) => item.marca !== marca
                );
                filtrarVeiculos("ResetViews", resultadoFiltro);
              }
            }}
          />
        </Form>
      </label>
    </div>
  );
};
export default Aside;

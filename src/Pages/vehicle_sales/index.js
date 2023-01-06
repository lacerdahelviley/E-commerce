import style from "./index.module.css";

function Sales() {
  return (
    <div className="main">
      <div className={style.HeaderStepsContainer}>
        <div className={style.CssHeaderSteps}>
          <div className={style.CssHeaderStepsItem}>
            <span className={style.CssHeaderItemCircle}>
              <span className={style.CssHeaderItemCircleSmall}>1</span>
              <span className={style.CssHeaderItemCircleMedium}></span>
            </span>
            <span className={style.CssHeaderStepsLine}></span>
            <span className={style.CssHeaderStepsTitle}>Veículo</span>
          </div>
          <div className={style.CssHeaderStepsItem}>
            <span className={style.CssHeaderItemCircle}>
              <span className={style.CssHeaderItemCircleSmall}>2</span>
              <span className={style.CssHeaderItemCircleMedium}></span>
            </span>
            <span className={style.CssHeaderStepsLine}></span>
            <span className={style.CssHeaderStepsTitle}>
              <p className={style.Subtitle}>Informações adicionais</p>
            </span>
          </div>
          <div className={style.CssHeaderStepsItem}>
            <span className={style.CssHeaderItemCircle}>
              <span className={style.CssHeaderItemCircleSmall}>3</span>
              <span className={style.CssHeaderItemCircleMedium}></span>
            </span>
            <span className={style.CssHeaderStepsTitle}>
              <p className={style.Final_Title}>Finalizar</p>
            </span>
          </div>
        </div>
      </div>
      <div className={style.title_line}>
        <hr className={style.w100} />
      </div>
      <div className={style.Conteiner}>
        <h1 className={style.SelectionTitle}>Dê início ao seu anúncio!</h1>
        <div>
          <div className={style.Form}>
            <div className={style.Form_Row_Radio}>
              <div className={style.FormField_FormField_Select}>
                <label className={style.FormFieldLabel}>Condição</label>
                <input className={style.Select} type="radio" /> Novo
                <input className={style.Select} type="radio" /> Seminovo
              </div>
            </div>
            <div className={style.SubtitleH3}>
              <h3>Dados do veículo</h3>
            </div>
            <div className={style.Form_Row}>
              <div className={style.FormField_FormFieldSelect}>
                <label className={style.FormFieldLabel}>Marca</label>
                <input
                  className={style.Select}
                  type="name"
                  placeholder="Insira a marca do veículo"
                  required
                />
              </div>
            </div>
            <div className={style.Form_Row}>
              <div className={style.FormField_FormFieldSelect}>
                <label className={style.FormFieldLabel}>Modelo</label>
                <select className={style.Select} name="model">
                  <option value>Escolha um modelo</option>
                </select>
              </div>
            </div>
            <div className={style.Form_Row_Year}>
              <div className={style.FormField_FormField_Select}>
                <label className={style.FormFieldLabel}>Ano do modelo</label>
                <select className={style.Select} name="yearmodel">
                  <option value>Escolha um ano</option>
                </select>
              </div>
              <div className={style.FormField_FormField_Select}>
                <label className={style.FormFieldLabel}>
                  Ano de fabricação
                </label>
                <select className={style.Select} name="yearfabrication">
                  <option value>Escolha um ano</option>
                </select>
              </div>
            </div>
            <div className={style.Form_Row}>
              <div className={style.FormField_FormFieldSelect}>
                <label className={style.FormFieldLabel}>Cor Predominante</label>
                <select className={style.Select} name="color">
                  <option value>Escolha uma cor</option>
                </select>
              </div>
            </div>
            <div className={style.Form_Row}>
              <div className={style.FormField_FormFieldSelect}>
                <label className={style.FormFieldLabel}>Cor Secundária</label>
                <select className={style.Select} name="color">
                  <option value>Escolha uma cor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;

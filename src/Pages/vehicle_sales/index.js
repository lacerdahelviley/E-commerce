import logo from "../../components/img/Tora_Logo.png";
import style from "./index.module.css"

function Sales() {
  return (
    <div className="main">
      <div className="header">
        <div>
          <img className="logo" src={logo} alt="Home"></img>
        </div>
        <div className="buttons">
          <button className="button1">BTN</button>
          <button className="button2">BTN2</button>
        </div>
      </div>
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
              <p className={style.Subtitle}>Informações 
              adicionais</p>
            </span>
          </div>
          <div className={style.CssHeaderStepsItem}>
            <span className={style.CssHeaderItemCircle}>
              <span className={style.CssHeaderItemCircleSmall}>3</span>
              <span className={style.CssHeaderItemCircleMedium}></span>
            </span>
            <span className={style.CssHeaderStepsTitle}><p className={style.Final_Title}>Finalizar</p></span>
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
                <div className={style.Form_Row}>
                    <div className={style.FormField_FormFieldSelect}>
                        <label className={style.FormFieldLabel}>Marca</label>
                        <select name="make"></select>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;

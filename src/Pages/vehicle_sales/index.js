import style from "./index.module.css";
import NavBar from "../../components/navbar";

function Sales() {
  return (
    <>
      <NavBar />
      <div className={style.main}>
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
        <div className={style.Container}>
          <h1 className={style.SelectionTitle}>Dê início ao seu anúncio!</h1>
          <div>
            <div className={style.Form}>
              <div className={style.Form_Row_Radio}>
                <div className={style.FormField_FormField_Select}>
                  <label className={style.FormFieldLabel}>Condição</label>
                  <input
                    className={style.SelectRadio}
                    type="radio"
                    value="0"
                    name=" campo_radio"
                    checked={true}
                  />{" "}
                  Novo
                  <input
                    className={style.SelectRadio}
                    type="radio"
                    value="0"
                    name=" campo_radio"
                  />{" "}
                  Seminovo
                </div>
              </div>
              <div className={style.SubtitleH3}>
                <h3 className={style.TextVehicle}>Dados do veículo</h3>
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
                  <input
                    className={style.Select}
                    name="model"
                    placeholder="Escolha um modelo"
                    required
                  />
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
                  <label className={style.FormFieldLabel}>
                    Cor Predominante
                  </label>
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
              <div className={style.SubtitleH4}>
                <h3 className={style.MoreInfo}>Outras Informações</h3>
              </div>
              <div className={style.Subcontainer}>
                <div className={style.Row}>
                  <div className="Power">
                    <div className="VehiclePower">
                      <input
                        className={style.Input}
                        placeholder="Potência"
                        name="Potência"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="Torque">
                    <div className="VehicleTorue">
                      <input
                        className={style.Input}
                        placeholder="Torque"
                        name="Torque"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className={style.Row}>
                  <div className="KM">
                    <div className="VehicleKm">
                      <input
                        className={style.Input}
                        placeholder="KM"
                        name="KM"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="Color">
                    <div className="VehicleColor">
                      <input
                        className={style.Input}
                        placeholder="Cor"
                        name="Cor"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className={style.Row}>
                  <div className="Cabin">
                    <div className="VehicleCabin">
                      <input
                        className={style.Input}
                        placeholder="Cabine"
                        name="Cabine"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="DiffentialRatio">
                    <div className="VehicleDifferntialRatio">
                      <input
                        className={style.Input}
                        placeholder="Relação do diferencial"
                        name="Relação do diferencial"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className={style.Row}>
                  <div className="SuspensionType">
                    <div className="VehicleSuspensionType">
                      <input
                        className={style.Input}
                        placeholder="Tipo de suspensão"
                        name="Tipo de suspensão"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="BetweenAxles">
                    <div className="VehicleBetweenAxles">
                      <input
                        className={style.Input}
                        placeholder="Entre eixos"
                        name="Entre eixos"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className={style.Fuel}>
                  <div className={style.FuelCapacity}>
                    <input
                      className={style.InputFuel}
                      placeholder="Capacidade de combustível"
                      name="Capacidade de combustível"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;

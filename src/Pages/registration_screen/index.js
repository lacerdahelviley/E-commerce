import style from "./index.module.css";
import NavBar from "../../components/navbar";

function Registration() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div>
          <h3 className="TitleRegistration">Title</h3>
        </div>
        <div className={style.conteiner}>
          <form>
            <div className="BodyForm">
              <div className="row">
                <div className={style.col}>
                  <div>
                    <label className={style.label_title}>
                      Responsável pelo Cadastro
                    </label>
                    <br />
                    <input
                      required
                      placeholder="Nome"
                      type="text"
                      className={style.form_control}
                    />
                  </div>
                </div>
              </div>
              <div className="title_line">
                <hr className="w100" />
              </div>
              <div>
                <div>
                  <h3 className={style.subtitle}>Dados do veículo</h3>
                </div>
              </div>
              <div className="plate">
                <div className="plate_input">
                  <span className={style.plate_box}>Placa do veículo</span>
                  <input
                    placeholder="Placa do veículo"
                    name="Placa do veículo"
                    type="text"
                  />
                </div>
                <span className={style.border}></span>
              </div>
              <div className="vehicle">
                <div className="vehicle_input">
                  <span className={style.vehicle_box}>Veículo</span>
                  <input
                    placeholder="Veículo"
                    name="Veículo"
                    type="text"
                    disabled
                  />
                </div>
                <span className={style.border}></span>
              </div>
              <div className="year">
                <div className="year_of_manufacturing">
                  <span className={style.yaer_box}>Ano de fabricação</span>
                  <input
                    placeholder="Ano de fabricação"
                    name="Ano de fabricação"
                    type="text"
                    disabled
                  />
                </div>
                <span className={style.border}></span>
              </div>
              <div className="title_line2">
                <hr className="w100" />
              </div>

              <div className={style.row}>
                <div className="power">
                  <div className="vehicle_power">
                    <input placeholder="Potência" name="Potência" type="text" />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="Torque">
                  <div className="vehicle_torue">
                    <input placeholder="Torque" name="Torque" type="text" />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="km">
                  <div className="vehicle_km">
                    <input placeholder="KM" name="KM" type="text" />
                  </div>
                  <span className={style.border}></span>
                </div>
              </div>

              <div className={style.row}>
                <div className="color">
                  <div className="vehicle_color">
                    <input placeholder="Cor" name="Cor" type="text" />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="cabin">
                  <div className="vehicle_cabin">
                    <input placeholder="Cabine" name="Cabine" type="text" />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="diffential_ratio">
                  <div className="vehicle_differntial_ratio">
                    <input
                      placeholder="Relação do diferencial"
                      name="Relação do diferencial"
                      type="text"
                    />
                  </div>
                  <span className={style.border}></span>
                </div>
              </div>

              <div className={style.row}>
                <div className="suspension_type">
                  <div className="vehicle_suspensiom_type">
                    <input
                      placeholder="Tipo de suspensão"
                      name="Tipo de suspensão"
                      type="text"
                    />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="between_axles">
                  <div className="vehicle_between_axles">
                    <input
                      placeholder="Entre eixos"
                      name="Entre eixos"
                      type="text"
                    />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="fuel">
                  <div className="fuel_capacity">
                    <input
                      placeholder="Capacidade de combustível"
                      name="Capacidade de combustível"
                      type="text"
                    />
                  </div>
                  <span className={style.border}></span>
                </div>
              </div>
              <div className={style.row}>
                <div className="field">
                  <div className="optional_field">
                    <span className={style.field_box}>
                      Informações opcionais
                    </span>
                    <br />
                    <textarea
                      placeholder="Informações opcionais"
                      name="Informações opcionais"
                      type="text"
                    />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="add_info">
                  <div className="additional_information">
                    <span className={style.info_box}>
                      Informações adicionais
                    </span>
                    <br />
                    <textarea
                      placeholder="Informações adicionais"
                      name="Informações adicionais"
                      type="text"
                    />
                  </div>
                  <span className={style.border}></span>
                </div>
                <div className="picture">
                  <div className="add_picture">
                    <span className={style.picture_box}>Adicionar fotos</span>
                    <br />
                    <span className={style.picture}>+</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <button className={style.registration_btn} type="submit">
                    Cadastar
                  </button>
                  <button className={style.erase_data} type="reset">
                    Limpar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;

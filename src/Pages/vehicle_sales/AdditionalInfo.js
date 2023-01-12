import style from "./index.module.css";
import styles from "./AdditionalInfo.module.css";
import NavBar from "../../components/navbar";

function Other() {
  return (
    <>
      <NavBar />
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
      <div className={styles.Container}>
        <div className={styles.title}>
          <h2>Conte-nos mais sobre o veículo</h2>
        </div>
        <div className={styles.Content}>
          <div className={styles.SubContainer}>
            <div className={styles.FormRow}>
              <label className={styles.Kilometers}>
                <br />
                Quanto seu veículo já rodou?
              </label>
              <input className={styles.Text} type="text" name="kilometers" />
            </div>
          </div>
          <div className={styles.Content}>
            <div className={styles.FormRow}>
              <label className={styles.TextBox}>
                Insira aqui detalhes que diferenciam seu veículo dos demais. Mas
                não é obrigatório, ok!?
              </label>
              <br />
              <textarea className={styles.Text}></textarea>
            </div>
          </div>
          <div className={styles.VehiclePicture}>
            <div className={styles.AddPicture}>
              <span className={styles.PictureBox}>Adicionar fotos</span>
              <br />
              <span className={styles.Picture}>+</span>
            </div>
          </div>
          <div className={styles.Price}>
            <div className={styles.AddPrice}>
              <label className={styles.PriceBox}>
                Por quanto você quer vender seu veículo?
              </label>
              <br />
              <span className={styles.VehiclePriceCents}>,00</span>
              <span className={styles.VehiclePriceRS}>R$</span>
              <input
                className={styles.PriceValue}
                type="number"
                name="price"
                required
                maxLength="9"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Other;

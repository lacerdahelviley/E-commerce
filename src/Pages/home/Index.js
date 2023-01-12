import style from "./Index.module.css";
import NavBar from "./../../components/navbar/index";

function Home() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className={style.conteiner}>
          <div className={style.main}>
            <div className={style.row_no_gutters}>
              <div className={style.vehicle}>
                {/* <a className="vehicle-inner" rel="noopener" data-cy="#$" href="https://via.placeholder.com"/> */}
                <div className={style.car_header}>
                  <img src="https://via.placeholder.com/120" alt="" />
                </div>
                <div className={style.car_body}>
                  <h2 className={style.car_name}>Veículo1</h2>
                  <p className={style.car_details}>Veículo xx 2012, xx km</p>
                  <div className={style.payment_row}>
                    <span className={style.payment_total}>Valor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style.footer}></div> */}
      </div>
    </>
  );
}

export default Home;

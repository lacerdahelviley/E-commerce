import style from "./HomeIndex.module.css";
import logo from "../../components/img/Tora_Logo.png";

function Home() {

  return (
    <div className="main">
      <div className="header">
        <div>
          <img className="logo" src={logo} 
          alt="Home" />
        </div>
        <div className="buttons">
          <button className="button1">Button 1</button>
          <button className="button2">Login</button>
        </div>
      </div>
      <div className={style.conteiner}>
        <div className="main">
          <div className={style.row_no_gutters}>
            <div className="vehicle">
              {/* <a className="vehicle-inner" rel="noopener" data-cy="#$" href="https://via.placeholder.com"/> */}
                <div className={style.car_header}>
                  <img src="https://via.placeholder.com/120" alt="" />
                </div>
                <div className="car_body">
                  <h2 className={style.car_name}>Veículo1</h2>
                  <p className={style.car_details}>Veículo xx 2012, xx km</p>
                  <div className={style.payment_row}>
                    <span className="payment_total">Valor</span>
                  </div>
                </div>
            </div> 
          </div>
        </div>
      </div>

      {/* <div className="footer"></div> */}
    </div>
  );
}

export default Home;

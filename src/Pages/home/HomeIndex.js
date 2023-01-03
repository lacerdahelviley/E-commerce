import styles from "./HomeIndex.module.css"
import logo from "../../components/img/Tora_Logo.png"

function Home() {
  
  function Login(){
    
  }

  return (
    <div className="main">
      <div className="header">
        <div>
          <img className="logo" src={logo} 
          alt="Home" />
        </div>
        <div className="buttons">
          <button className="button1">Button 1</button>
          <button className="button2" onClick={Login}>Login</button>
        </div>
      </div>
      <div className={styles.conteiner}>
        <div className="main">
          <div className="row_no_gutters">
            <div className="vehicle">
              {/* <a className="vehicle-inner" rel="noopener" data-cy="#$" href="https://via.placeholder.com"/> */}
                <div className="car-header">
                  <img src="https://via.placeholder.com/120" alt="" />
                </div>
                <div className="car-body">
                  <h2 className="car-name">Veículo1</h2>
                  <p className="car-details">Veículo xx 2012, xx km</p>
                  <div className="payment-row">
                    <span className="payment-total">Valor</span>
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

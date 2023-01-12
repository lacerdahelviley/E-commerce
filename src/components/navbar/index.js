import style from "./index.module.css";
import logo from "../img/Tora_Logo.png";
import loupe from "../img/loupe.png";
import bag from "../img/Shopping_Bag.png";
import Logout from "../img/Logout.png"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="App">
        <div className={style.header}>
          <div className={style.HeaderContents}>
            <ul>
              <ul>
                <Link to="/">
                  <img className={style.logo} src={logo} alt="Home"></img>
                </Link>
              </ul>
            </ul>
            <div className={style.HeaderButtons}>
              <ul>
                <ul>
                  <Link to="/">
                    <button className={style.button}>Página principal</button>
                  </Link>
                </ul>
              </ul>
              <ul>
                <ul>
                  <Link to="/registration_screen/index">
                    <button className={style.button}>
                      Cadastro de veículos
                    </button>
                  </Link>
                </ul>
              </ul>
              <ul>
                <ul>
                  <Link to="/vehicle_sales/index">
                    <button className={style.button}>Cadastro de vendas</button>
                  </Link>
                </ul>
              </ul>
              <ul>
                <ul>
                  <img className={style.loupe} src={loupe} alt="search" />
                </ul>
              </ul>
              <ul>
                <ul>
                  <img
                    className={style.ShoppingBag}
                    src={bag}
                    alt="shopping_bag"
                  />
                </ul>
              </ul>
              <ul>
                <Link to="/login/Index">
                  <img className={style.Logout} src={Logout} alt="Logout" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

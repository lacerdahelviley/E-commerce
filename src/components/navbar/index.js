import style from "./index.module.css";
import logo from "../img/Tora_Logo.png";
import loupe from "../img/loupe.png";
import bag from "../img/Shopping_Bag.png";
import Logout from "../img/Logout.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className={style.header}>
        <div className={style.HeaderContents}>
          <div className={style.HeaderButtons}>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <Link to="/">
                  <img className={style.logo} src={logo} alt="Home"></img>
                </Link>
              </li>
            </ul>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <Link to="/">
                  <button className={style.button}>Página principal</button>
                </Link>
              </li>
            </ul>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <Link to="/registration_screen/index">
                  <button className={style.button}>Cadastro de veículos</button>
                </Link>
              </li>
            </ul>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <Link to="/vehicle_sales/index">
                  <button className={style.button}>Cadastro de vendas</button>
                </Link>
              </li>
            </ul>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <img className={style.loupe} src={loupe} alt="search" />
              </li>
            </ul>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <img
                  className={style.ShoppingBag}
                  src={bag}
                  alt="shopping_bag"
                />
              </li>
            </ul>
            <ul className={style.HeaderSeparator}>
              <li className={style.HeaderTopic}>
                <Link to="/login/Index">
                  <img className={style.Logout} src={Logout} alt="Logout" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

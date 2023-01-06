import React from "react";
import "./App.css";
import logo from "./components/img/Tora_Logo.png";
import loupe from "./components/img/loupe.png";
import bag from "./components/img/Shopping_Bag.png"
// import Registration from "./Pages/registration_screen/index";
import Sales from "./Pages/vehicle_sales/index";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="HeaderContents">
          <ul>
            <ul>
              <img className="logo" src={logo} alt="Home"></img>
            </ul>
          </ul>
          <div className="HeaderButtons">
            <ul>
              <button className="button">Login</button>
            </ul>
            <ul>
              <ul>
                <button className="button">Página principal</button>
              </ul>
            </ul>
            <ul>
              <ul>
                <button className="button">Cadastro de veículos</button>
              </ul>
            </ul>
            <ul>
              <ul>
                <button className="button">Cadastro de vendas</button>
              </ul>
            </ul>
            <ul>
              <ul>
                <img className="loupe" src={loupe} alt="search" />
              </ul>
            </ul>
            <ul>
              <ul>
                <img className="ShoppingBag" src={bag} alt="shopping_bag" />
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <Sales />
    </div>
  );
}

export default App;

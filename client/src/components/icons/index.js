import React, { useState } from "react";
import Search from "components/img/loupe.png";
import Style from "./icons.module.scss";
import Button from "components/buttons";
import TextField from "components/textField";
import { NavLink } from "react-router-dom";

export default function Icons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className={Style.container}>
        <div className={Style.searchBar}>
          <TextField placeholder="Buscar" />
          <img src={Search} alt="Lupa de pesquisa" />
        </div>
        {isLoggedIn ? (
          <>
            <Button>
              <NavLink className={Style.buttons} to="/vehicleRegistration">
                Cadastro de veiculos
              </NavLink>
            </Button>
            <Button>
              <NavLink className={Style.buttons} to="/salesRegister">
                Cadastro de vendas
              </NavLink>
            </Button>
            <Button>
              <NavLink className={Style.buttons} to="/login" onClick={handleLogin}>
                Logout
              </NavLink>
            </Button>
          </>
        ) : (
          <Button>
            <NavLink className={Style.buttons} to="/login" onClick={handleLogout}>
              Login
            </NavLink>
          </Button>
        )}
      </div>
    </>
  );
}

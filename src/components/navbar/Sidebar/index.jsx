import React from "react";
import styled from "styled-components";
import logo from "../../img/Tora_Logo.png";
import loupe from "../../img/loupe.png";
import calendar from "../../img/Shopping_Bag.png";
import Logout from "../../img/Logout.png";
import { Link } from "react-router-dom";

const HeaderContents = styled.div`
  background: linear-gradient(192deg, #155226, #185c3e, #16463f);
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid;
`;
const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderSeparator = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #185c3e;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 38rem;
    width: 23rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
const HeaderTopic = styled.li`
  padding: 15px 10px;
  padding-right: 7rem;
`;
const Logo = styled.img`
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.4;
  }
  height: 40px;
  margin: 5px 15px;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
`;
const Button = styled.button`
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.4;
  }
  cursor: pointer;
  margin: 5px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #ffffff;
  opacity: 0.75;
  font-weight: bold;
  font-size: 10px;
  height: 30px;
  width: auto;
  letter-spacing: 0.05rem;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;
const Loupe = styled.img`
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.4;
  }
  width: 14px;
  height: 14px;
  opacity: 0.7;
  cursor: pointer;
`;
const Exit = styled.img`
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.4;
  }
  width: 20px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
`;

const Sidebar = ({ open }) => {
  return (
    <HeaderContents>
      <HeaderButtons>
        <HeaderSeparator open={open} >
          <HeaderTopic>
            <Link to="/">
              <Logo src={logo} alt="Home"></Logo>
            </Link>
          </HeaderTopic>
          <HeaderTopic>
            <Link to="/">
              <Button>Página Inicial</Button>
            </Link>
          </HeaderTopic>
          <HeaderTopic>
            <Link to="/registration_screen/index">
              <Button>Cadastro de veículos</Button>
            </Link>
          </HeaderTopic>
          <HeaderTopic>
            <Link to="/vehicle_sales/index">
              <Button>Cadastro de vendas</Button>
            </Link>
          </HeaderTopic>
          <HeaderTopic>
            <Link to="/">
              <Loupe src={loupe} alt="Search" />
            </Link>
          </HeaderTopic>
          <HeaderTopic>
            <Link to="/">
              <Loupe src={calendar} alt="Search" />
            </Link>
          </HeaderTopic>
          <HeaderTopic>
            <Link to="/login/Index">
              <Exit src={Logout} alt="Logout" />
            </Link>
          </HeaderTopic>
        </HeaderSeparator>
      </HeaderButtons>
    </HeaderContents>
  );
};

export default Sidebar;

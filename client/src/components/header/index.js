import styled from "styled-components";
import Style from "./header.module.scss";
import Icons from "components/icons";
import Logo from "components/img/ToraLogo.png";

const HeaderContainer = styled.div`
  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    flex-flow: column nowrap;
    height: 30rem;
    width: 23rem;
    padding-top: 3.5rem;
    background-color: #00652e;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    transition: transform 0.3s ease-in-out;
  }
`;
const Header = ({ open }) => {
  return (
    <>
      <header className={Style.header__container}>
        <div className={Style.logo__container}>
          <img src={Logo} alt="Logomarca Tora Transportes" />
          <strong>Tora</strong>
          Seminovos
        </div>
        <HeaderContainer className={Style.header__container__icons} open={open}>
          <Icons />
        </HeaderContainer>
      </header>
    </>
  );
};
export default Header;

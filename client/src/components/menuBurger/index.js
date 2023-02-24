import React from "react";
import styled from "styled-components";
import Header from "components/header";

const BurgerMenu = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 13px;
    right: 30px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 20;

    span{
        width: 2rem;
        height: 0.15rem;
        background-color: ${({ open }) => (!open ? "#c3c3c3" : "#fff")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s linear;
        &:nth-child(1){
          transform: ${({ open }) => (!open ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2){
          transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};
          opacity: ${({ open }) => !open ? 0 : 1};
        }
        &:nth-child(3){
          transform: ${({ open }) => (!open ? "rotate(-45deg)" : "rotate(0)")};
        }
        @media only screen and (min-width: 769px) {
          display: none;
        }
    }
    
}
`;


const Burger = ({open, setOpen}) => {
  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />        
      </BurgerMenu>
      <Header open={open} />
    </>
  );
};
export default Burger;

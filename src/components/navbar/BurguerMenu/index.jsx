import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";

const BurguerMenu = styled.div`
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

  div {
    width: 2rem;
    height: 0.15rem;
    background-color: ${({open}) => open ? "#ccccccc3" : "#fff"};
    border-radius: 10px;
    transform-origin: 0.1px;
    transition: all .3s linear;

    &:nth-child(1){
        transform: ${({open}) => open ? "rotate(31deg)" : "rotate(0)"}
    }

    &:nth-child(2){
        transform: ${({open}) => open ? "rotate(-31deg)" : "rotate(0)"}
    }

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;
const Burguer = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <BurguerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </BurguerMenu>
      <Sidebar open={open} />
    </>
  );
};

export default Burguer;

import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import {BiSolidContact} from "react-icons/bi";
import {SlBasketLoaded} from "react-icons/sl";

// import { Basket, closeBasket, setShow } from "./Basket";

const Navbar = ({setShow}) => {
  // set the basket icon to open basket
  const openBasket = () => {
    setShow(true);
  };
  
  return (
    <div className="navBar">
       <button className='homeBtn'  ><AiTwotoneHome /></button>
        <button className='contactBtn'><BiSolidContact /></button>
       <button className='basket' onClick={openBasket}><SlBasketLoaded className='basket' /></button>
      </div>
    );
};
  
export default Navbar;